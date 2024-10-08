import multer from "multer";
import path from "path";
// Set up storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the destination directory
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname)); // Specify the file naming convention
  }
});

// Initialize Multer with the storage configuration
const upload = multer({ storage: storage });



const storagelocal = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'localStorage/'); // Specify the destination directory
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname+file.originalname + '-' + Date.now()+path.extname(file.originalname)); // Specify the file naming convention
  }
});

// Initialize Multer with the storage configuration
const local = multer({ storage: storagelocal });
export { upload,local };