const express = require('express');
const asyncHandler = require('../middleware/asyncHandler');
const vendorController = require('../controllers/vendorController');
const { requireRole } = require('../middleware/auth');

const router = express.Router();

router.use(requireRole('vendor', 'admin'));

router.get('/products', asyncHandler(vendorController.getMyProducts));
router.post('/products', asyncHandler(vendorController.createProduct));
router.put('/products/:id', asyncHandler(vendorController.updateProduct));
router.delete('/products/:id', asyncHandler(vendorController.deleteProduct));
router.get('/orders', asyncHandler(vendorController.getVendorOrders));

module.exports = router;
