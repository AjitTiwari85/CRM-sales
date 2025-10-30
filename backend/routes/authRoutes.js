import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser); // optional, create Admin / Agent / User
router.post("/login", loginUser);

export default router;

