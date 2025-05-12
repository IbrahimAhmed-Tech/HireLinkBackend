const { createUser, authenticateUser } = require("../services/authService");
const jwt = require("jsonwebtoken");

const handleRegisterUser = async (req, res) => {
    const { fullName, email, password, role } = req.body;

    if (!fullName || !email || !password || !role) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const result = await createUser({ fullName, email, password, role });
        return res.status(201).json(result);
    } catch (error) {
        const status = error.message === "User already exists" ? 409 : 500;
        return res.status(status).json({ message: error.message });
    }
};

const handleLoginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await authenticateUser(email, password);
        if (!user) {
            return res.status(404).json({ error: "User not found or invalid password" });
        }
        const token = jwt.sign(
            {
                id: user._id,
                name: user.name,
                email: user.email,
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );
        user.password = "";
        res.status(200).json({ message: "Login successful!", token, user });

    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {
    handleRegisterUser,
    handleLoginUser,
};
