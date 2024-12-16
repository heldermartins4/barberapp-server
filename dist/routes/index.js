"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoute_1 = __importDefault(require("./userRoute"));
const router = (0, express_1.Router)();
router.post("/api", (req, res) => {
    const { message } = req.body;
    console.log("Request received with name:", message);
    const salutation = `Hello, ${message || "World"}!`;
    res.json({ message: salutation });
});
router.use("/user", userRoute_1.default);
exports.default = router;
