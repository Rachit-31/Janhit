import { Router } from "express";
import { verifyJWT } from "../middlewares/authMiddleware.js";
import { loginUser, logout, signupUser } from "../controller/userController.js";
import { assignProblem, createProblem, rateProblem } from "../controller/problemController.js";
import { signupOfficial } from "../controller/officialController.js";



const router = Router();

// local user
router.route("/signupUser").post(signupUser);
router.route("/loginUser").post(loginUser);
router.route("/logout").post(verifyJWT, logout);

// problem
router.route("/createProblem/:userId").post(verifyJWT, createProblem);
router.route("/problems/:problemId/rate/:userId").post(verifyJWT, rateProblem);
router.route("/assign/:problemId").post(assignProblem)


// official
router.route("/signupOfficial").post(signupOfficial)

export default router;