const validateUserData = (req, res, next) => {
    const { formData } = req.body;
    const {
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
    } = formData;
  
    const missingBaseFields = [];
    if (!fullName) missingBaseFields.push("fullName");
    if (!email) missingBaseFields.push("email");
    if (!password) missingBaseFields.push("password");
    if (!role) missingBaseFields.push("role");
    if (!profilePicture) missingBaseFields.push("profilePicture");
  
    if (missingBaseFields.length > 0) {
      return res.status(400).json({
        error: `Missing required fields: ${missingBaseFields.join(", ")}`,
      });
    }
  
    let roleSpecificFields = [];
  
    if (role === "candidate") {
      if (!skills || skills.length === 0) roleSpecificFields.push("skills");
      if (!expectedSalary) roleSpecificFields.push("expectedSalary");
      if (!resume) roleSpecificFields.push("resume"); 

    } else if (role === "hiringManager") {
      if (!companyName) roleSpecificFields.push("companyName");
      if (!companyWebsite) roleSpecificFields.push("companyWebsite");
    } else {
      return res.status(400).json({
        error: `Invalid role value. Must be either "candidate" or "hiringManager".`,
      });
    }
  
    if (roleSpecificFields.length > 0) {
      return res.status(400).json({
        error: `Missing required fields for ${role}: ${roleSpecificFields.join(", ")}`,
      });
    }
  
    next(); 
  };
  
  module.exports = validateUserData;
  