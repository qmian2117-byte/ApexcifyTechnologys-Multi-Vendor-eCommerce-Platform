const Product = require('../models/Product');

async function getProducts(req, res) {
    const {
        category, search, minPrice, maxPrice,
        sort, page = 1, limit = 20, hasDiscount, inStock
    } = req.query;

    const query = { isActive: true };

    if (category && category !== 'all') {
        query.category = { $regex: new RegExp(`^${category}$`, 'i') };
    }

    if (search) {
        query.$or = [
            { name: { $regex: search, $options: 'i' } },
            { description: { $regex: search, $options: 'i' } },
            { category: { $regex: search, $options: 'i' } },
            { vendor: { $regex: search, $options: 'i' } }
        ];
    }

    if (minPrice) query.price = { ...query.price, $gte: parseFloat(minPrice) };
    if (maxPrice) query.price = { ...query.price, $lte: parseFloat(maxPrice) };

    if (hasDiscount === 'true') {
        query.$expr = { $gt: ['$originalPrice', '$price'] };
    }

    if (inStock === 'true') query.stock = { $gt: 0 };

    let sortObj = { createdAt: -1 };
    if (sort === 'price-low') sortObj = { price: 1 };
    else if (sort === 'price-high') sortObj = { price: -1 };
    else if (sort === 'rating') sortObj = { rating: -1 };
    else if (sort === 'popular') sortObj = { reviewCount: -1 };

    const pageNum = Math.max(1, parseInt(page));
    const limitNum = Math.min(100, Math.max(1, parseInt(limit)));
    const skip = (pageNum - 1) * limitNum;

    const [products, total] = await Promise.all([
        Product.find(query).sort(sortObj).skip(skip).limit(limitNum).lean(),
        Product.countDocuments(query)
    ]);

    return res.json({
        success: true,
        products,
        total,
        page: pageNum,
        totalPages: Math.ceil(total / limitNum)
    });
}

async function getProductById(req, res) {
    let product;
    // Try by MongoDB _id first, then by legacy string id
    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
        product = await Product.findById(req.params.id).lean();
    } else {
        product = await Product.findOne({ _id: req.params.id }).lean();
    }

    if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found' });
    }
    return res.json({ success: true, product });
}

async function getFeaturedProducts(req, res) {
    const products = await Product.find({ featured: true, isActive: true }).limit(12).lean();
    return res.json({ success: true, products });
}

async function getCategories(req, res) {
    const categories = await Product.distinct('category', { isActive: true });
    return res.json({ success: true, categories });
}

module.exports = { getProducts, getProductById, getFeaturedProducts, getCategories };
