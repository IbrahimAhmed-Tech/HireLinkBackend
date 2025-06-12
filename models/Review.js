
const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
    {
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },     
        companyName: {
            type: String,
            required: true,
            trim: true,
        },       
        text: {
            type: String,
            required: true,
        },   
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5,
        },    
    },
    { timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
