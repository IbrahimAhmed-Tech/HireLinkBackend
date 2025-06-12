const { createJob, getJobs } = require("../services/jobService");
const jwt = require("jsonwebtoken");

const handlePostJob = async (req, res) => {
    try {
        const jobData = req.body
        const postedBy = req.userId;
        jobData.postedBy = postedBy;
        const savedJob = await createJob(jobData);
        res.status(201).json({ message: "Job posted successfully!", job: savedJob });
    } catch (error) {
        console.error("Error posting job:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const handleFetchJobs = async (req, res) => {
    try {
        const jobs = await getJobs();
        console.log("jobs.length:-------",jobs.length);
        res.status(200).json({ success: true, jobs });
    } catch (error) {
        console.error("Error in fetchJobs:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

module.exports = {
    handlePostJob,
    handleFetchJobs,
};
