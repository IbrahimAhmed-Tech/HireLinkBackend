const express = require("express");
const { handlePostJob, handleFetchJobs } = require("../controllers/jobController");
const validateJobData = require("../middlewares/validateJobData");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/post-job", authMiddleware, validateJobData, handlePostJob);
router.post("/fetch-jobs",handleFetchJobs);

module.exports = router;
