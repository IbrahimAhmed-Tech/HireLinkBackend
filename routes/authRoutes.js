const express = require("express");
const { handleRegisterUser, handleLoginUser } = require("../controllers/authController");
const validateUserData = require("../middlewares/validateUserData");

const router = express.Router();

router.post("/create-user", validateUserData, handleRegisterUser);
router.post("/login", handleLoginUser);

module.exports = router;
