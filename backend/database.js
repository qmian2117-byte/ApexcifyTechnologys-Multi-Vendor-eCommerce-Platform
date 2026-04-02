// MarketHub Product Database
// This file contains all product data for the platform

const productCategories = [
    'Electronics', 'Fashion', 'Home & Living', 'Beauty',
    'Sports', 'Books', 'Toys', 'Automotive', 'Health', 'Jewelry'
];

const vendors = [
    'TechMart', 'Fashion Hub', 'Home Living', 'Beauty Box',
    'Sports & Fit', 'Book World', 'Toy Kingdom', 'Auto Parts Pro',
    'Health Plus', 'Jewelry Palace', 'Digital Store', 'Style Shop'
];

const productTemplates = {
    Electronics: [
        { name: 'PureSound Headphones', price: 99.99, originalPrice: 149.99, image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=1000&q=80' },
        { name: 'Elite Smart Watch', price: 199.99, originalPrice: 249.99, image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=1000&q=80' },
        { name: 'BassPro Speaker', price: 59.99, originalPrice: 89.99, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=1000&q=80' },
        { name: 'Pro Laptop Stand', price: 34.99, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=1000&q=80' },
        { name: 'Clicky Keyboard', price: 129.99, image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=1000&q=80' },
        { name: 'Swift Wireless Mouse', price: 29.99, image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=1000&q=80' },
        { name: 'HD Video Webcam', price: 89.99, image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1000&q=80' },
        { name: 'Fast USB-C Hub', price: 45.99, image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=1000&q=80' },
        { name: 'Stable Phone Stand', price: 19.99, image: 'https://images.unsplash.com/photo-1586105251261-72a756657805?w=1000&q=80' },
        { name: 'Smart Desk Lamp', price: 39.99, image: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=1000&q=80' }
    ],
    Fashion: [
        { name: 'Luxury Gold Watch', price: 149.99, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=1000&q=80' },
        { name: 'Modern Sunglasses', price: 89.99, image: 'https://images.unsplash.com/photo-1511499767390-90342f16b147?w=1000&q=80' },
        { name: 'Urban Sneakers', price: 119.99, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1000&q=80' },
        { name: 'Cool Denim Jacket', price: 79.99, image: 'https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?w=1000&q=80' },
        { name: 'Soft Cotton Tee', price: 24.99, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1000&q=80' },
        { name: 'Real Leather Belt', price: 34.99, image: 'https://images.unsplash.com/photo-1624222247344-550fb60583f2?w=1000&q=80' },
        { name: 'Daily Backpack', price: 59.99, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1000&q=80' },
        { name: 'Warm Winter Scarf', price: 29.99, image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=1000&q=80' },
        { name: 'Pro Running Shoes', price: 89.99, originalPrice: 120.00, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000&q=80' },
        { name: 'Stylish Sport Cap', price: 19.99, image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=1000&q=80' }
    ],
    'Home & Living': [
        { name: 'Modern Clay Vase', price: 44.99, image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=1000&q=80' },
        { name: 'Soft Pillow Set', price: 39.99, image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=1000&q=80' },
        { name: 'Minimal Wall Clock', price: 54.99, image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=1000&q=80' },
        { name: 'Warm Side Lamp', price: 49.99, image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1000&q=80' },
        { name: 'Wood Storage Box', price: 29.99, image: 'https://images.unsplash.com/photo-1544413660-299165566b1d?w=1000&q=80' },
        { name: 'Chic Photo Frame', price: 24.99, image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=1000&q=80' },
        { name: 'Scented Candle Set', price: 34.99, image: 'https://images.unsplash.com/photo-1602874801006-96e1fa8aa48b?w=1000&q=80' },
        { name: 'Ceramic Plate Set', price: 64.99, image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1000&q=80' },
        { name: 'Pure Cotton Towels', price: 44.99, image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=1000&q=80' },
        { name: 'Pro Chef Knife Set', price: 39.99, image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1000&q=80' }
    ],
    Beauty: [
        { name: 'Organic Skincare', price: 59.99, image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d52d?w=1000&q=80' },
        { name: 'Glow Face Serum', price: 39.99, image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1000&q=80' },
        { name: 'Soft Brush Set', price: 44.99, image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=1000&q=80' },
        { name: 'Daily Moisturizer', price: 34.99, image: 'https://images.unsplash.com/photo-1556229010-aa9e5d93349e?w=1000&q=80' },
        { name: 'Floral Perfume', price: 79.99, originalPrice: 100.00, image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=1000&q=80' },
        { name: 'Pro Ionic Hair Dryer', price: 54.99, image: 'https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=1000&q=80' },
        { name: 'Bright Nail Polish', price: 24.99, image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=1000&q=80' },
        { name: 'Clay Face Mask', price: 29.99, image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=1000&q=80' },
        { name: 'Matte Lipstick Set', price: 34.99, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=1000&q=80' },
        { name: 'Organic Body Lotion', price: 19.99, image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=1000&q=80' }
    ],
    Sports: [
        { name: 'Grip Yoga Mat', price: 29.99, image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=1000&q=80' },
        { name: 'Solid Dumbbells', price: 89.99, image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1000&q=80' },
        { name: 'Power Bands', price: 19.99, image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=1000&q=80' },
        { name: 'Sport Water Bottle', price: 24.99, image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=1000&q=80' },
        { name: 'Large Gym Bag', price: 44.99, image: 'https://images.unsplash.com/photo-1553721610-1a87815c4d82?w=1000&q=80' },
        { name: 'Speed Jump Rope', price: 14.99, image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1000&q=80' },
        { name: 'Pro Fitness Tracker', price: 79.99, image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=1000&q=80' },
        { name: 'Elite Tennis Racket', price: 129.99, image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=1000&q=80' },
        { name: 'Pro Basketball', price: 34.99, image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1000&q=80' },
        { name: 'Padded Cycling Gloves', price: 24.99, image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1000&q=80' }
    ],
    Books: [
        { name: 'Classic Fiction', price: 14.99, image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1000&q=80' },
        { name: 'Successful Business', price: 24.99, image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1000&q=80' },
        { name: 'Healthy Cookbook', price: 29.99, image: 'https://images.unsplash.com/photo-1588195538326-c5acd4d4c5d0?w=1000&q=80' },
        { name: 'Mindful Living', price: 19.99, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1000&q=80' },
        { name: 'History of Art', price: 39.99, image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1000&q=80' },
        { name: 'Modern Science', price: 34.99, image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1000&q=80' },
        { name: 'Ancient History', price: 27.99, image: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=1000&q=80' },
        { name: 'World Travel Guide', price: 22.99, image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1000&q=80' },
        { name: 'Modern Poetry', price: 16.99, image: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=1000&q=80' },
        { name: 'Epic Comic Book', price: 12.99, image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=1000&q=80' }
    ],
    Toys: [
        { name: 'Classic Board Game', price: 34.99, image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=1000&q=80' },
        { name: 'Large Puzzle Set', price: 24.99, image: 'https://images.unsplash.com/photo-1591290619762-c231c9d27881?w=1000&q=80' },
        { name: 'Hero Action Figure', price: 29.99, image: 'https://images.unsplash.com/photo-1579613832111-ac7dfcc7723f?w=1000&q=80' },
        { name: 'Color Building Blocks', price: 44.99, image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1000&q=80' },
        { name: 'Fast Remote Car', price: 59.99, image: 'https://images.unsplash.com/photo-1558050032-4e1278a5127a?w=1000&q=80' },
        { name: 'Large Doll House', price: 79.99, image: 'https://images.unsplash.com/photo-1599693860608-81e5e6b7bc92?w=1000&q=80' },
        { name: 'Smart Learning Toy', price: 39.99, image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=1000&q=80' },
        { name: 'Soft Stuffed Bear', price: 24.99, image: 'https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?w=1000&q=80' },
        { name: 'Cool Science Kit', price: 49.99, image: 'https://images.unsplash.com/photo-1518644961665-ed172691aaa1?w=1000&q=80' },
        { name: 'Big Art Painting Set', price: 34.99, image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1000&q=80' }
    ],
    Automotive: [
        { name: 'Strong Phone Holder', price: 19.99, image: 'https://images.unsplash.com/photo-1563396983906-b3795482a59a?w=1000&q=80' },
        { name: 'HD Dash Camera', price: 89.99, image: 'https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?w=1000&q=80' },
        { name: 'Quick Car Charger', price: 14.99, image: 'https://images.unsplash.com/photo-1601513445506-2ab0d4fb4229?w=1000&q=80' },
        { name: 'Comfy Seat Covers', price: 49.99, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=80' },
        { name: 'Solid Floor Mats', price: 39.99, image: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=1000&q=80' },
        { name: 'Ocean Air Freshener', price: 9.99, image: 'https://images.unsplash.com/photo-1590642916589-592bca10dfbf?w=1000&q=80' },
        { name: 'Digital Tire Gauge', price: 12.99, image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1000&q=80' },
        { name: 'Power Jump Starter', price: 69.99, image: 'https://images.unsplash.com/photo-1606220588913-b3adb97d2696?w=1000&q=80' },
        { name: 'Portable Car Vacuum', price: 54.99, image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=1000&q=80' },
        { name: 'Folding Sun Shade', price: 24.99, image: 'https://images.unsplash.com/photo-1541348263662-e068662d82af?w=1000&q=80' }
    ],
    Health: [
        { name: 'Complete Multi-Vitamin', price: 29.99, image: 'https://images.unsplash.com/photo-1550572017-4cd24c4e42b6?w=1000&q=80' },
        { name: 'Pure Whey Protein', price: 44.99, image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=1000&q=80' },
        { name: 'Safety First Aid Kit', price: 34.99, image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=1000&q=80' },
        { name: 'Smart Heart Monitor', price: 59.99, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1000&q=80' },
        { name: 'Digital Thermometer', price: 19.99, image: 'https://images.unsplash.com/photo-1584515933487-779bf17e4e1d?w=1000&q=80' },
        { name: 'Large Sanitizer Pack', price: 14.99, image: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=1000&q=80' },
        { name: 'Box of Face Masks', price: 19.99, image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1000&q=80' },
        { name: 'Deep Massage Gun', price: 99.99, originalPrice: 149.99, image: 'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?w=1000&q=80' },
        { name: 'Large Heating Pad', price: 29.99, image: 'https://images.unsplash.com/photo-1550831107-1553da8c3b7c?w=1000&q=80' },
        { name: 'Pill Box Organizer', price: 12.99, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1000&q=80' }
    ],
    Jewelry: [
        { name: 'Solid Silver Necklace', price: 89.99, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1000&q=80' },
        { name: 'Shining Gold Earrings', price: 129.99, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1000&q=80' },
        { name: 'Crystal Diamond Ring', price: 299.99, image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1000&q=80' },
        { name: 'Stylish Bracelet Set', price: 49.99, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1000&q=80' },
        { name: 'Smooth Pearl Pendant', price: 119.99, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1000&q=80' },
        { name: 'Classic Silver Cufflinks', price: 39.99, image: 'https://images.unsplash.com/photo-1610831119032-7527804e5112?w=1000&q=80' },
        { name: 'Heart Charm Anklet', price: 34.99, image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343a?w=1000&q=80' },
        { name: 'Vintage Brooch Pin', price: 29.99, image: 'https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?w=1000&q=80' },
        { name: 'Silver Charm Bracelet', price: 54.99, image: 'https://images.unsplash.com/photo-1620047790570-8b7b0f3a7e7f?w=1000&q=80' },
        { name: 'Classic Watch Chain', price: 24.99, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1000&q=80' }
    ]
};

// Generate 100 products
function generateProducts() {
    const products = [];
    let productId = 1;

    // Generate products from each category
    productCategories.forEach((category, catIndex) => {
        const templates = productTemplates[category] || productTemplates.Electronics;

        const productsPerCategory = Math.floor(100 / productCategories.length);

        for (let i = 0; i < productsPerCategory; i++) {
            const template = templates[i % templates.length];
            const vendor = vendors[Math.floor(Math.random() * vendors.length)];
            const baseRating = 3.5 + Math.random() * 1.5;
            const rating = parseFloat(baseRating.toFixed(1));
            const reviews = Math.floor(Math.random() * 500) + 10;
            const stock = Math.floor(Math.random() * 50) + 5;

            // Add variety to pricing
            const priceVariation = 0.9 + Math.random() * 0.2;
            const price = parseFloat((template.price * priceVariation).toFixed(2));

            // Some products have discounts
            let originalPrice = null;
            let badge = null;

            if (template.originalPrice) {
                originalPrice = parseFloat((template.originalPrice * priceVariation).toFixed(2));
                const discountPercent = Math.round(((originalPrice - price) / originalPrice) * 100);
                badge = `-${discountPercent}%`;
            } else if (Math.random() < 0.2) {
                // 20% chance of being "New"
                badge = 'New';
            } else if (rating >= 4.5 && reviews > 200) {
                // High rated with many reviews = Bestseller
                badge = 'Bestseller';
            }

            const featured = i < 4; // First 4 from each category are featured

            products.push({
                id: String(productId++),
                name: `${template.name} ${i > 0 ? 'Pro' : ''}`.trim(),
                description: `High-quality ${template.name.toLowerCase()} for daily use. This product from ${vendor} is built to last and works great. Perfect for your ${category.toLowerCase()} needs.`,
                price: price,
                originalPrice: originalPrice,
                category: category,
                image: template.image,
                rating: rating,
                reviews: reviews,
                stock: stock,
                vendor: vendor,
                badge: badge,
                featured: featured
            });
        }
    });

    return products;
}

// Generate users
const users = [
    {
        id: 1,
        name: 'John Customer',
        email: 'user@example.com',
        password: '$2a$10$rZ5s4Y.kqxYqYPZL7jZJ2.LJN3hZ4KqxPqQd5vQC5vQvF5qZ5qZ5q', // password123
        role: 'customer',
        createdAt: new Date('2025-01-15')
    },
    {
        id: 2,
        name: 'Jane Vendor',
        email: 'vendor@example.com',
        password: '$2a$10$rZ5s4Y.kqxYqYPZL7jZJ2.LJN3hZ4KqxPqQd5vQC5vQvF5qZ5qZ5q', // vendor123
        role: 'vendor',
        createdAt: new Date('2024-12-01')
    },
    {
        id: 3,
        name: 'Admin User',
        email: 'admin@example.com',
        password: '$2a$10$rZ5s4Y.kqxYqYPZL7jZJ2.LJN3hZ4KqxPqQd5vQC5vQvF5qZ5qZ5q', // admin123
        role: 'admin',
        createdAt: new Date('2024-01-01')
    }
];

// Initial reviews
const initialReviews = [
    {
        id: 1,
        productId: '1',
        userId: 1,
        userName: 'John Smith',
        rating: 5,
        title: 'Excellent Sound Quality!',
        comment: 'These headphones exceeded my expectations. The sound quality is incredible, and the noise cancellation works perfectly. Very comfortable for long listening sessions.',
        verified: true,
        helpful: 24,
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
    },
    {
        id: 2,
        productId: '1',
        userId: 2,
        userName: 'Emily Johnson',
        rating: 5,
        title: 'Perfect for Work from Home',
        comment: 'I use these daily for video calls and music. The microphone quality is excellent, and the battery life is outstanding. Highly recommend!',
        verified: true,
        helpful: 18,
        createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    },
    {
        id: 3,
        productId: '1',
        userId: 3,
        userName: 'Michael Davis',
        rating: 4,
        title: 'Great Value for Money',
        comment: 'Overall very satisfied with the purchase. Sound quality is good, though not audiophile level. Perfect for the price point.',
        verified: true,
        helpful: 12,
        createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000)
    }
];

module.exports = {
    products: generateProducts(),
    users: users,
    initialReviews: initialReviews,
    categories: productCategories,
    vendors: vendors
};
