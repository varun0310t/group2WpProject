import { Router } from "express";
import  {signup } from "../Controllers/SignupController.js";

const router = Router();

router.post('/', signup);

export default router;