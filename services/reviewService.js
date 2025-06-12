const Review = require("../models/Review");

const createReview = async (reviewData) => {
    const review = new Review(reviewData);
    await review.save();
    return review;
};
const getReviews = async () => {
    return await Review.find()
        .populate("postedBy", "fullName") 
        .sort({ createdAt: -1 });
};

module.exports = {
    createReview,
    getReviews
};