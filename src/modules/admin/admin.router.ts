import express from "express";
import { Request, Response } from "express";
import { adminController } from "./admin.controller";
const router = express.Router();

router.get('/', adminController.test);
router.post('/login', adminController.login);
router.post('/register', adminController.register);

export const adminRouter = router;