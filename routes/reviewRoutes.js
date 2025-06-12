const express = require('express');// ✅ This is required
const authMiddleware = require('../middlewares/authMiddleware');
const validateReviewData = require('../middlewares/validateReviewData');
const { handlePostReview, handleFetchReviews } = require('../controllers/reviewController');
const router = express.Router();



router.post("/post-review", authMiddleware, validateReviewData, handlePostReview);
router.post("/fetch-reviews", handleFetchReviews);



module.exports = router;
