const express = require("express");
const { handleRegisterUser, handleLoginUser } = require("../controllers/authController");

const router = express.Router();

router.post("/create-user", handleRegisterUser);
router.post("/login", handleLoginUser);

module.exports = router;
