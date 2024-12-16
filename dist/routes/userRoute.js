"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("@/controllers/userController");
const express_1 = require("express");
const router = (0, express_1.Router)();
const userController = new userController_1.UserController();
router.post("/create", userController.createUser.bind(userController));
exports.default = router;
