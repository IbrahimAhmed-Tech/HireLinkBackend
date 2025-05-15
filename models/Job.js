// jobModel.js

const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
    {
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        company: {
            type: String,
            required: true,
            trim: true,
        },
        location: {
            type: String,
            required: true,
            trim: true,
        },
        jobType: {
            type: String,
            enum: ["Full-time", "Part-time", "Contract", "Internship"],
            required: true,
        },
        workLocationType: {
            type: String,
            enum: ["Onsite", "Remote", "Hybrid"],
            required: true,
        },
        salary: {
            type: String, 
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
        },
        requirements: {
            type: String, 
        },
        responsibilities: {
            type:String,
            required:true,
        },
        benefits: {
            type: String,
        },
        postedDate: {
            type: Date,
            default: Date.now,
        },
        
        applicationDeadline: {
            type: Date,
            required: true,
        },
        category: {
            type: String,
            enum: ["IT", "Marketing", "Engineering", "Healthcare", "Finance", "Other"],
        },
        isUrgent: {
            type: Boolean
        },        
        applicants:{
            type: Number,
            default: 0
        }
    },
    { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
