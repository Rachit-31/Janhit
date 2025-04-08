import { Router } from "express";
import { verifyJWT } from "../middlewares/authMiddleware.js";
import { loginUser, logout, signupUser } from "../controller/userController.js";



const router = Router();

// local user
router.route("/signupUser").post(signupUser);
router.route("/loginUser").post(loginUser);
router.route("/logout").post(verifyJWT, logout);



export default router;