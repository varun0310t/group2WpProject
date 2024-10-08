import User from "../models/userModel.js";
import cloudinary from "../config/Claudinaryconfig.js";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const uploadFilesCloud = async (req, res) => {
    try {

        const currentUser = await User.findOne({ username: req.user.username });
        if (!currentUser) {
            fs.unlinkSync(filePath);
            return res.status(404).send("User not found");

        }

        const files = req.files;
        const uploadedFiles = [];

        for (const file of files) {
            const fileMimeType = file.mimetype;  // Add this line to log the MIME type
            console.log(fileMimeType);  // Add this line to log the MIME type
            const filePath = path.join(__dirname, '..', file.path);
            console.log(filePath);
            const result = await cloudinary.uploader.upload(filePath, {
                folder: 'uploads',
                resource_type: 'auto'
            });
            console.log(result);
            uploadedFiles.push(
                result.secure_url
            );

            fs.unlinkSync(filePath);
        }

 
        currentUser.cloudUrl.push(...uploadedFiles);
        await currentUser.save();
        res.status(200).send("Files uploaded successfully");

    } catch (error) {
        res.status(500).send("An error occurred");
        console.log(error);
    }
};

export const uploadFilesLocal = async (req, res) => {
    try {
        const currentUser = await User.findOne({ username: req.user.username });
        if (!currentUser) {
            return res.status(404).send("User not found");
        }

        const files = req.files.map(file => (
          
         file.filename
        ));

        // Add files to user model
        currentUser.fileurl.push(...files);
        await currentUser.save();
        res.status(200).send("Files uploaded successfully");

    } catch (error) {
        res.status(500).send("An error occurred");
        console.log(error);
    }
};