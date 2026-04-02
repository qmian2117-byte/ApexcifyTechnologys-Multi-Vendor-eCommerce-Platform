const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/constants');
const Order = require('../models/Order');

async function createOrder(req, res) {
    try {
        const { items, total, subtotal, tax, shipping, discount, couponCode, shippingAddress, paymentMethod } = req.body;

        let user = req.user || null;
        if (!user) {
            const authHeader = req.headers.authorization || '';
            if (authHeader.startsWith('Bearer ')) {
                const token = authHeader.split(' ')[1];
                try {
                    const decoded = jwt.verify(token, JWT_SECRET);
                    user = decoded;
                } catch (e) {}
            }
        }

        if (!Array.isArray(items) || items.length === 0) {
            return res.status(400).json({ success: false, message: 'Order items are required' });
        }

        if (!total || total <= 0) {
            return res.status(400).json({ success: false, message: 'Invalid order total' });
        }

        if (!shippingAddress?.fullName || !shippingAddress?.email || !shippingAddress?.address) {
            return res.status(400).json({ success: false, message: 'Shipping details are incomplete' });
        }

        const year = new Date().getFullYear();
        const count = await Order.countDocuments();
        const orderNumber = `MH-${year}-${String(count + 1).padStart(5, '0')}`;

        const newOrder = new Order({
            orderNumber,
            userId: user?.id || null,
            userEmail: shippingAddress.email,
            items,
            total,
            subtotal: subtotal || total,
            tax: tax || 0,
            shipping: shipping || 0,
            discount: discount || 0,
            couponCode: couponCode || null,
            shippingAddress,
            paymentMethod: paymentMethod || 'cod',
            status: 'pending',
            statusHistory: [{ status: 'pending', note: 'Order received and awaiting confirmation', timestamp: new Date() }],
            estimatedDelivery: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000)
        });

        // Ensure userId is formatted precisely
        if (user && user.id) {
            newOrder.userId = user.id;
        }

        // Save properly with Mongoose to ensure full validation and correct types
        const savedOrder = await newOrder.save();

        return res.status(201).json({
            success: true,
            message: 'Order placed successfully',
            order: savedOrder
        });
    } catch (err) {
        console.error('Order creation error:', err);
        return res.status(500).json({ success: false, message: err.message || 'Server error during order creation' });
    }
}

async function getOrdersByUser(req, res) {
    const userId = req.user?.id;
    if (!userId) {
        return res.status(401).json({ success: false, message: 'Authentication required' });
    }
    const orders = await Order.find({ userId }).sort({ createdAt: -1 }).lean();
    return res.json({ success: true, orders });
}

async function getOrderById(req, res) {
    const order = await Order.findById(req.params.orderId).lean();
    if (!order) {
        return res.status(404).json({ success: false, message: 'Order not found' });
    }
    // Authorize: user can only see their own orders, admin can see all
    if (req.user?.role !== 'admin' && String(order.userId) !== String(req.user?.id)) {
        return res.status(403).json({ success: false, message: 'Access denied' });
    }
    return res.json({ success: true, order });
}

async function trackOrder(req, res) {
    const { orderRef } = req.params;
    const { email } = req.query;

    let order;
    if (orderRef.match(/^[0-9a-fA-F]{24}$/)) {
        order = await Order.findById(orderRef).lean();
    } else {
        order = await Order.findOne({
            orderNumber: { $regex: new RegExp(`^${orderRef}$`, 'i') }
        }).lean();
    }

    if (!order) {
        return res.status(404).json({ success: false, message: 'Order not found' });
    }

    // Allow if email matches, or logged in user owns the order, or admin
    const emailMatch = email && order.shippingAddress?.email?.toLowerCase() === email.toLowerCase();
    const userMatch = req.user && (String(order.userId) === String(req.user.id) || req.user.role === 'admin');

    if (!emailMatch && !userMatch) {
        return res.status(403).json({ success: false, message: 'Please provide the email used for this order' });
    }

    return res.json({
        success: true,
        order: {
            id: order._id,
            orderNumber: order.orderNumber,
            status: order.status,
            total: order.total,
            createdAt: order.createdAt,
            estimatedDelivery: order.estimatedDelivery,
            itemsCount: order.items?.length || 0,
            items: order.items,
            shippingAddress: order.shippingAddress,
            statusHistory: order.statusHistory || [],
            paymentMethod: order.paymentMethod
        }
    });
}

async function updateOrderStatus(req, res) {
    const { status, note } = req.body;
    const validStatuses = ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled'];

    if (!validStatuses.includes(status)) {
        return res.status(400).json({ success: false, message: 'Invalid order status' });
    }

    const order = await Order.findById(req.params.orderId);
    if (!order) {
        return res.status(404).json({ success: false, message: 'Order not found' });
    }

    order.status = status;
    order.statusHistory.push({ status, note: note || `Order status updated to ${status}`, timestamp: new Date() });
    await order.save();

    return res.json({ success: true, message: 'Order status updated', order });
}

async function cancelOrder(req, res) {
    const order = await Order.findById(req.params.orderId);
    if (!order) {
        return res.status(404).json({ success: false, message: 'Order not found' });
    }

    if (String(order.userId) !== String(req.user.id) && req.user.role !== 'admin') {
        return res.status(403).json({ success: false, message: 'Access denied' });
    }

    if (['delivered', 'cancelled'].includes(order.status)) {
        return res.status(400).json({ success: false, message: `Cannot cancel a ${order.status} order` });
    }

    order.status = 'cancelled';
    order.statusHistory.push({ status: 'cancelled', note: 'Order cancelled by customer', timestamp: new Date() });
    await order.save();

    return res.json({ success: true, message: 'Order cancelled', order });
}

module.exports = { createOrder, getOrdersByUser, getOrderById, trackOrder, updateOrderStatus, cancelOrder };
