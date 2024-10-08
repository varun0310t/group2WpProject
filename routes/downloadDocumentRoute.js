import { Router } from "express";
import { downloadDocumentCloud } from "../Controllers/DownloadDocumentController.js";
import verifyToken from "../middleware/verifyTokenMiddleware.js";
const router = Router();

router.get('/cloud',verifyToken ,downloadDocumentCloud);

export default router;