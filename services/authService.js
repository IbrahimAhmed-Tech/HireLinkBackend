const bcrypt = require("bcryptjs");
const User = require("../models/User");

const createUser = async ({
    fullName,
    email,
    password,
    role,
    skills,
    expectedSalary,
    companyName,
    companyWebsite,
    resume,
    profilePicture,
}) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        fullName,
        email,
        password: hashedPassword,
        role,
        profilePicture,
    });

    
    if (role === "candidate") {
        newUser.skills = skills;
        newUser.expectedSalary = expectedSalary;
        newUser.resume = resume;
    }

    if (role === "hiringManager") {
        newUser.companyName = companyName;
        newUser.companyWebsite = companyWebsite;
    }

    await newUser.save();
    return { message: "User created successfully" };
};
  

const authenticateUser = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        return null;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return null;
    }

    return user; 
};
module.exports = {
    createUser,
    authenticateUser,
};
