const bcrypt = require("bcryptjs");
const User = require("../models/User");

const createUser = async ({ fullName, email, password, role }) => {
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
    });

    await newUser.save();
    return { message: "User created successfully" };
};

const authenticateUser = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("Invalid email or password");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Invalid email or password");
    }

    return user; // return the actual Mongoose user object
};
module.exports = {
    createUser,
    authenticateUser,
};
