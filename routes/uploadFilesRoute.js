import { Router } from "express";
import { uploadFiles } from "../Controllers/UploadfilesController.js"
import parser from "../config/MulterConfig.js"

const router = Router();

router.post('/cloud', parser.array('files', 10), uploadFiles);