const express = require('express');
const asyncHandler = require('../middleware/asyncHandler');
const adminController = require('../controllers/adminController');
const { requireRole } = require('../middleware/auth');

const router = express.Router();

router.use(requireRole('admin'));

router.get('/metrics', asyncHandler(adminController.getMetrics));
router.get('/orders', asyncHandler(adminController.getAllOrders));
router.get('/users', asyncHandler(adminController.getAllUsers));
router.put('/users/:userId', asyncHandler(adminController.updateUser));
router.get('/products', asyncHandler(adminController.getAllProducts));
router.patch('/products/:productId/featured', asyncHandler(adminController.toggleProductFeatured));

module.exports = router;
