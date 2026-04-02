const express = require('express');
const reviewController = require('../controllers/reviewController');

const router = express.Router();

router.post('/:reviewId/helpful', reviewController.markReviewHelpful);

module.exports = router;
