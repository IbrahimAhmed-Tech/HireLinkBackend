const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        fullName: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true, lowercase: true, trim: true },
        password: { type: String, required: true },
        role: { type: String, enum: ["hiringManager", "candidate"], required: true },

        skills: [{ type: String }],
        expectedSalary: { type: String },

        companyName: { type: String },
        companyWebsite: { type: String },

        resume: { type: String, default: "" },
        profilePicture: { type: String, default: "" },
    },
    { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
module.exports = User;
