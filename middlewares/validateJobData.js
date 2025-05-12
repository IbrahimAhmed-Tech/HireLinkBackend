const requiredFields = [
  "title",
  "company",
  "location",
  "jobType",
  "workLocationType",
  "salary",
  "description",
  "responsibilities",
  "applicationDeadline",
  "category",
];

const validateJobData = (req, res, next) => {
  const missingFields = requiredFields.filter(field => !req.body[field]);

  if (missingFields.length > 0) {
    return res.status(400).json({
      error: `Missing required fields: ${missingFields.join(", ")}`
    });
  }


  next(); // proceed to the controller
};

module.exports = validateJobData;
