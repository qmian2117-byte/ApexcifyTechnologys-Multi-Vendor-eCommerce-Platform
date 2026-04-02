const express = require('express');
const asyncHandler = require('../middleware/asyncHandler');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/', asyncHandler(productController.getCategories));

module.exports = router;
