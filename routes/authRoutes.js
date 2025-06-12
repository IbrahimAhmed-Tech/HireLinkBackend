const express = require("express");
const { handleRegisterUser, handleLoginUser } = require("../controllers/authController");
const validateUserData = require("../middlewares/validateUserData");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();
router.get("/validate-token", authMiddleware, (req, res) => {
    return res.status(200).json({ message: "Token is valid" });
});
router.post("/create-user", validateUserData, handleRegisterUser);
router.post("/login", handleLoginUser);

module.exports = router;
