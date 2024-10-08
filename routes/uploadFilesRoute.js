import { Router } from "express";
import {uploadFilesCloud,uploadFilesLocal } from "../Controllers/UploadfilesController.js";
import {upload,local} from "../config/MulterConfig.js"
import verifyToken from "../middleware/verifyTokenMiddleware.js";

const router = Router();

router.post('/cloud', verifyToken, upload.array('files', 10), uploadFilesCloud);

router.post('/local', verifyToken, local.array('files', 10), uploadFilesLocal );

export default router;