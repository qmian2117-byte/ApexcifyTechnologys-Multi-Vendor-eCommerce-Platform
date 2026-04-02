const state = require('../data/store');

function getCart(req, res) {
    const cart = state.carts[req.params.userId] || [];
    return res.json({ success: true, cart });
}

function addToCart(req, res) {
    const { userId, productId, quantity } = req.body;

    if (!state.carts[userId]) {
        state.carts[userId] = [];
    }

    const product = state.products.find((p) => p.id === productId);
    if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found' });
    }

    const existingItem = state.carts[userId].find((item) => item.id === productId);
    if (existingItem) existingItem.quantity += quantity || 1;
    else state.carts[userId].push({ ...product, quantity: quantity || 1 });

    return res.json({ success: true, message: 'Product added to cart', cart: state.carts[userId] });
}

function updateCartItem(req, res) {
    const { userId, productId } = req.params;
    const { quantity } = req.body;

    if (!state.carts[userId]) {
        return res.status(404).json({ success: false, message: 'Cart not found' });
    }

    const item = state.carts[userId].find((entry) => entry.id === productId);
    if (!item) {
        return res.status(404).json({ success: false, message: 'Item not found in cart' });
    }

    item.quantity = quantity;
    return res.json({ success: true, message: 'Cart updated', cart: state.carts[userId] });
}

function removeFromCart(req, res) {
    const { userId, productId } = req.params;

    if (!state.carts[userId]) {
        return res.status(404).json({ success: false, message: 'Cart not found' });
    }

    state.carts[userId] = state.carts[userId].filter((item) => item.id !== productId);
    return res.json({ success: true, message: 'Item removed from cart', cart: state.carts[userId] });
}

function clearCart(req, res) {
    state.carts[req.params.userId] = [];
    return res.json({ success: true, message: 'Cart cleared' });
}

module.exports = {
    getCart,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart
};
