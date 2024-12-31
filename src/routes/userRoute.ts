import { UserController } from "@/controllers/userController";
import { Router } from "express";
import { authenticateToken } from '../middleware';

const router = Router();

const userController = new UserController();

// Route::Credentials
router.post("/create", userController.createUser.bind(userController));
router.get("/auth", userController.getCredentials.bind(userController));

router.patch("/update", authenticateToken, userController.updateUser.bind(userController));

export default router;