const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const ORDER_STATUSES = ['pending', 'confirmed', 'processing', 'shipped', 'out_for_delivery', 'delivered', 'cancelled'];

module.exports = {
    JWT_SECRET,
    ORDER_STATUSES
};
