const express = require('express');
const multer = require('multer');
const cloudinary = require('../cloudinary');
const fs = require('fs');

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/upload-resume', upload.single('resume'), async (req, res) => {


    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }


        const uploadStream = cloudinary.uploader.upload_stream(
            {
                resource_type: 'auto',
                folder: 'resumes',
                timeout: 60000,
            },

            (error, result) => {
                if (error) {
                    console.error("Cloudinary Upload Error:", error);
                    return res.status(500).json({ message: 'Cloudinary upload failed', error });
                }

                res.status(200).json({ url: result.secure_url });
            }
        );

        uploadStream.end(req.file.buffer);

    } catch (error) {
        console.error("Upload error:", error);
        res.status(500).json({ message: 'Upload failed', error });
    }
});


router.post('/upload-profile-picture', upload.single('profilePicture'), async (req, res) => {


    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No image uploaded' });
        }
        const uploadStream = cloudinary.uploader.upload_stream(
            {
                resource_type: 'auto',
                folder: 'profile-pictures',
                timeout: 60000,
            },

            (error, result) => {
                if (error) {
                    console.error("Cloudinary Upload Error:", error);
                    return res.status(500).json({ message: 'Cloudinary upload failed', error });
                }

                res.status(200).json({ url: result.secure_url });
            }
        );

        uploadStream.end(req.file.buffer);

    } catch (error) {
        console.error("Upload error:", error);
        res.status(500).json({ message: 'Upload failed', error });
    }
});
module.exports = router;
