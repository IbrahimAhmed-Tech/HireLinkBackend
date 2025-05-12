const bcrypt = require("bcryptjs");
const Job = require("../models/Job");


const createJob = async (jobData) => {
    const job = new Job(jobData);
    return await job.save();
};

const getJobs = async () => {
    return await Job.find().sort({ postedDate: -1 });
};
module.exports = {
    createJob,
    getJobs,
};
