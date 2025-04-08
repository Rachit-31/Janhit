import { Router } from "express";
import { verifyJWT } from "../middlewares/authMiddleware.js";
import { signupUser } from "../controller/userController.js";



const router = Router();

// local user
router.route("/signupUser").post(signupUser);




export default router;