const Review = require('../models/Review');
const Product = require('../models/Product');

async function getProductReviews(req, res) {
    const reviews = await Review.find({ productId: req.params.productId })
        .sort({ createdAt: -1 })
        .lean();
    return res.json({ success: true, reviews });
}

async function addProductReview(req, res) {
    const { rating, title, comment } = req.body;
    const { productId } = req.params;

    if (!rating || rating < 1 || rating > 5) {
        return res.status(400).json({ success: false, message: 'Rating must be between 1 and 5' });
    }

    if (!comment || comment.trim().length < 5) {
        return res.status(400).json({ success: false, message: 'Comment must be at least 5 characters' });
    }

    const userName = req.user?.name || req.body.userName || 'Anonymous';
    const userId = req.user?.id || null;

    const newReview = new Review({
        productId,
        userId,
        userName,
        rating: Number(rating),
        title: title || '',
        comment,
        verified: !!req.user,
        helpful: 0
    });

    await newReview.save();

    // Update product rating
    const allReviews = await Review.find({ productId });
    const avgRating = allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length;
    await Product.findByIdAndUpdate(productId, {
        rating: parseFloat(avgRating.toFixed(1)),
        reviewCount: allReviews.length
    }).catch(() => {}); // Ignore if product id doesn't match (legacy data)

    return res.status(201).json({
        success: true,
        message: 'Review submitted successfully',
        review: newReview
    });
}

async function markReviewHelpful(req, res) {
    const review = await Review.findByIdAndUpdate(
        req.params.reviewId,
        { $inc: { helpful: 1 } },
        { new: true }
    );
    if (!review) {
        return res.status(404).json({ success: false, message: 'Review not found' });
    }
    return res.json({ success: true, helpful: review.helpful });
}

module.exports = { getProductReviews, addProductReview, markReviewHelpful };
