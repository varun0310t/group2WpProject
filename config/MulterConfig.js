import cloudinary from 'ClaudinaryConfig.js';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'public',
        allowedFormats: ['jpg', 'png', "mp4", "jpeg"],
        //q:what is the transformation for?

    },
});
const parser = multer({ storage: storage });
export default parser;


