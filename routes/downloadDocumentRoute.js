import { Router } from "express";
import { downloadDocumentCloud, downloadDocumentLocal,downloadDocumentLocalPost } from "../Controllers/DownloadDocumentController.js";
import verifyToken from "../middleware/verifyTokenMiddleware.js";
const router = Router();

router.get('/cloud',verifyToken ,downloadDocumentCloud);

router.get('/local',verifyToken ,downloadDocumentLocal);

router.post('/local',verifyToken ,downloadDocumentLocalPost);

export default router;