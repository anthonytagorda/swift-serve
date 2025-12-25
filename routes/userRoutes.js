import express from "express";
import { register, login, getUserData } from "../controllers/userController.js";
import { isVerifiedUser } from "../middleware/token.js";

const router = express.Router();

// Authentication Routes
router.route("/register").post(register);
router.route("/login").post(login);

router.route("/").get(isVerifiedUser, getUserData);

export default router;
