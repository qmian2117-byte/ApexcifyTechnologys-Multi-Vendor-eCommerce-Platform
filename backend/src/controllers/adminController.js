const User = require('../models/User');
const Product = require('../models/Product');
const Order = require('../models/Order');
const Review = require('../models/Review');

async function getMetrics(req, res) {
    const [userCount, productCount, orderCount, reviewCount, revenueData] = await Promise.all([
        User.countDocuments(),
        Product.countDocuments({ isActive: true }),
        Order.countDocuments(),
        Review.countDocuments(),
        Order.aggregate([
            { $match: { status: { $ne: 'cancelled' } } },
            { $group: { _id: null, total: { $sum: '$total' } } }
        ])
    ]);

    const revenue = revenueData[0]?.total || 0;

    return res.json({
        success: true,
        metrics: {
            users: userCount,
            products: productCount,
            orders: orderCount,
            reviews: reviewCount,
            revenue: Number(revenue.toFixed(2))
        }
    });
}

async function getAllOrders(req, res) {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    const [orders, total] = await Promise.all([
        Order.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
        Order.countDocuments()
    ]);

    return res.json({ success: true, orders, total, page, totalPages: Math.ceil(total / limit) });
}

async function getAllUsers(req, res) {
    const users = await User.find().select('-password').sort({ createdAt: -1 }).lean();
    return res.json({ success: true, users });
}

async function updateUser(req, res) {
    const { role, isActive } = req.body;
    const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $set: { role, isActive } },
        { new: true }
    ).select('-password');

    if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
    }
    return res.json({ success: true, message: 'User updated', user });
}

async function getAllProducts(req, res) {
    const products = await Product.find().sort({ createdAt: -1 }).lean();
    return res.json({ success: true, products });
}

async function toggleProductFeatured(req, res) {
    const product = await Product.findById(req.params.productId);
    if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found' });
    }
    product.featured = !product.featured;
    await product.save();
    return res.json({ success: true, message: `Product ${product.featured ? 'featured' : 'unfeatured'}`, product });
}

module.exports = { getMetrics, getAllOrders, getAllUsers, updateUser, getAllProducts, toggleProductFeatured };
