import { UserController } from "@/controllers/userController";
import { Router } from "express";

const router = Router();

const userController = new UserController();

router.post("/create", userController.createUser.bind(userController));
router.get("/auth", userController.getCredentials.bind(userController));

export default router;