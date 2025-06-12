const requiredFields = [
    "companyName",
    "text",
    "rating"
];

const validateReviewData = (req, res, next) => {
    const missingFields = requiredFields.filter(field => !req.body[field]);

    if (missingFields.length > 0) {
        return res.status(400).json({
            error: `Missing required fields: ${missingFields.join(", ")}`
        });
    }

    // Validate rating is a number between 1 and 5
    const rating = Number(req.body.rating);
    if (isNaN(rating) || rating < 1 || rating > 5) {
        return res.status(400).json({
            error: "Rating must be a number between 1 and 5"
        });
    }

    next();
};

module.exports = validateReviewData;
