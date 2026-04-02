const express = require('express');
const orderController = require('../controllers/orderController');
const { optionalAuth, requireAuth, requireAdmin } = require('../middleware/auth');

const router = express.Router();

// Zero-Middleware POST route for maximum execution stability
router.post('/', (req, res) => orderController.createOrder(req, res));
router.get('/track/:orderRef', optionalAuth, (req, res) => orderController.trackOrder(req, res));
router.get('/my-orders', requireAuth, (req, res) => orderController.getOrdersByUser(req, res));
router.get('/:orderId', requireAuth, (req, res) => orderController.getOrderById(req, res));
router.patch('/:orderId/status', requireAdmin, (req, res) => orderController.updateOrderStatus(req, res));
router.patch('/:orderId/cancel', requireAuth, (req, res) => orderController.cancelOrder(req, res));

module.exports = router;
