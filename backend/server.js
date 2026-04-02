require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./src/app');

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/markrthub';

async function startServer() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('======================================');
        console.log('  MarketHub Backend Server');
        console.log('======================================');
        console.log(`  MongoDB: Connected to markrthub`);

        // Seed initial data if DB is empty
        await seedDatabase();

        app.listen(PORT, () => {
            console.log(`  Server: http://localhost:${PORT}`);
            console.log('======================================');
        });
    } catch (error) {
        console.error('Failed to start server:', error.message);
        process.exit(1);
    }
}

async function seedDatabase() {
    const User = require('./src/models/User');
    const Product = require('./src/models/Product');

    const userCount = await User.countDocuments();
    if (userCount === 0) {
        console.log('  Seeding: Creating default users...');
        await User.create([
            { name: 'John Customer', email: 'user@example.com', password: 'password123', role: 'customer' },
            { name: 'Jane Vendor', email: 'vendor@example.com', password: 'vendor123', role: 'vendor' },
            { name: 'Admin User', email: 'admin@example.com', password: 'admin123', role: 'admin' }
        ]);
        console.log('  Seeding: ✓ Default users created (user/vendor/admin @example.com)');
    }

    const productCount = await Product.countDocuments();
    if (productCount === 0) {
        console.log('  Seeding: Creating product catalog...');
        const vendor = await User.findOne({ email: 'vendor@example.com' });
        const db = require('./database');
        const products = db.products.map(p => ({
            name: p.name,
            description: p.description,
            price: p.price,
            originalPrice: p.originalPrice || null,
            category: p.category,
            image: p.image,
            rating: p.rating || 0,
            reviewCount: p.reviews || 0,
            stock: p.stock || 10,
            vendor: vendor.name,
            vendorId: vendor._id,
            badge: p.badge || null,
            featured: p.featured || false,
            isActive: true
        }));
        await Product.insertMany(products);
        console.log(`  Seeding: ✓ ${products.length} products linked to vendor: ${vendor.name}`);
    }

    console.log(`  DB: ${await User.countDocuments()} users, ${await Product.countDocuments()} products`);
}

startServer();
