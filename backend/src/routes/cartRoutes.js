const express = require('express');
const cartController = require('../controllers/cartController');

const router = express.Router();

router.get('/:userId', cartController.getCart);
router.post('/', cartController.addToCart);
router.put('/:userId/:productId', cartController.updateCartItem);
router.delete('/:userId/:productId', cartController.removeFromCart);
router.delete('/:userId', cartController.clearCart);

module.exports = router;
