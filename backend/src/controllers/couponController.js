function validateCoupon(req, res) {
    const { code } = req.body;

    const coupons = {
        WELCOME30: { discount: 0.30, description: '30% off', minOrder: 0 },
        SAVE20: { discount: 0.20, description: '20% off', minOrder: 50 },
        DISCOUNT10: { discount: 0.10, description: '10% off', minOrder: 0 }
    };

    const coupon = coupons[String(code || '').toUpperCase()];

    if (!coupon) {
        return res.status(404).json({ success: false, message: 'Invalid coupon code' });
    }

    return res.json({
        success: true,
        message: 'Coupon is valid',
        coupon: { code: String(code).toUpperCase(), ...coupon }
    });
}

module.exports = {
    validateCoupon
};
