const express = require('express');
const asyncHandler = require('../middleware/asyncHandler');
const productController = require('../controllers/productController');
const reviewController = require('../controllers/reviewController');
const { optionalAuth } = require('../middleware/auth');

const router = express.Router();

router.get('/featured/list', asyncHandler(productController.getFeaturedProducts));
router.get('/categories', asyncHandler(productController.getCategories));
router.get('/', asyncHandler(productController.getProducts));
router.get('/:id', asyncHandler(productController.getProductById));
router.get('/:productId/reviews', asyncHandler(reviewController.getProductReviews));
router.post('/:productId/reviews', optionalAuth, asyncHandler(reviewController.addProductReview));
router.post('/:reviewId/helpful', asyncHandler(reviewController.markReviewHelpful));

module.exports = router;
