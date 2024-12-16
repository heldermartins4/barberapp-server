import { Router } from "express";
import userRoute from "./userRoute"

const router = Router();

router.post("/api", (req, res) => {
  const { message } = req.body;

  console.log("Request received with name:", message);

  const salutation = `Hello, ${message || "World"}!`;
  res.json({ message: salutation });
});

router.use("/user", userRoute);

export default router;