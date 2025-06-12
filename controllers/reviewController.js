const { createReview, getReviews } = require("../services/reviewService");


const handlePostReview = async (req, res) => {
    try {
        const reviewData = req.body
        
        const postedBy = req.userId;
        reviewData.postedBy = postedBy;
        const savedReview = await createReview(reviewData);
        res.status(201).json({
            status: 'success',
            message: "Review posted successfully!",
            review: savedReview
        });
    } catch (error) {
        console.error("Error posting review:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
const handleFetchReviews = async (req, res) => {
    try {
        const reviews = await getReviews();
        console.log("reviews.length:-------", reviews.length);
        res.status(200).json({ success: true, reviews });
    } catch (error) {
        console.error("Error in fetchJobs:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};


module.exports = {
    handlePostReview,
    handleFetchReviews
};
