const Product = require('../models/Product');
const User = require('../models/User');

async function getMyProducts(req, res) {
    const query = req.user.role === 'admin'
        ? { isActive: true }
        : { vendorId: req.user.id };
    const products = await Product.find(query).sort({ createdAt: -1 }).lean();
    return res.json({ success: true, products });
}

async function createProduct(req, res) {
    const { name, description, price, category, image, stock, originalPrice, tags } = req.body;

    if (!name || !description || !price || !category) {
        return res.status(400).json({ success: false, message: 'Name, description, price and category are required' });
    }

    const vendorUser = await User.findById(req.user.id);
    const vendorName = vendorUser?.name || 'Vendor';

    const newProduct = new Product({
        name,
        description,
        price: Number(price),
        originalPrice: originalPrice ? Number(originalPrice) : null,
        category,
        image: image || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
        stock: Number(stock) || 0,
        vendor: vendorName,
        vendorId: req.user.id,
        tags: tags || [],
        featured: false,
        badge: 'New'
    });

    await newProduct.save();
    return res.status(201).json({ success: true, message: 'Product created successfully', product: newProduct });
}

async function updateProduct(req, res) {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found' });
    }

    if (req.user.role !== 'admin' && String(product.vendorId) !== String(req.user.id)) {
        return res.status(403).json({ success: false, message: 'You can only edit your own products' });
    }

    const allowedFields = ['name', 'description', 'price', 'originalPrice', 'category', 'image', 'stock', 'badge', 'tags'];
    allowedFields.forEach((field) => {
        if (req.body[field] !== undefined) {
            product[field] = ['price', 'originalPrice', 'stock'].includes(field)
                ? Number(req.body[field])
                : req.body[field];
        }
    });

    await product.save();
    return res.json({ success: true, message: 'Product updated successfully', product });
}

async function deleteProduct(req, res) {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found' });
    }

    if (req.user.role !== 'admin' && String(product.vendorId) !== String(req.user.id)) {
        return res.status(403).json({ success: false, message: 'You can only delete your own products' });
    }

    // Soft delete
    product.isActive = false;
    await product.save();

    return res.json({ success: true, message: 'Product deleted successfully' });
}

async function getVendorOrders(req, res) {
    const Order = require('../models/Order');
    // Get all vendor's products first
    const myProducts = await Product.find({ vendorId: req.user.id }).select('_id name').lean();
    const myProductIds = myProducts.map(p => String(p._id));

    // Find orders that contain vendor's products
    const orders = await Order.find({
        'items.productId': { $in: myProductIds }
    }).sort({ createdAt: -1 }).lean();

    return res.json({ success: true, orders });
}

module.exports = { getMyProducts, createProduct, updateProduct, deleteProduct, getVendorOrders };
