const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    originalPrice: { type: Number, default: null },
    category: { type: String, required: true },
    image: { type: String, default: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500' },
    images: [{ type: String }],
    rating: { type: Number, default: 0, min: 0, max: 5 },
    reviewCount: { type: Number, default: 0 },
    stock: { type: Number, default: 0, min: 0 },
    vendor: { type: String, default: 'MarketHub' },
    vendorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
    badge: { type: String, default: null },
    featured: { type: Boolean, default: false },
    tags: [{ type: String }],
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

productSchema.index({ name: 'text', description: 'text', category: 'text' });
productSchema.index({ category: 1 });
productSchema.index({ price: 1 });
productSchema.index({ featured: 1 });

module.exports = mongoose.model('Product', productSchema);
