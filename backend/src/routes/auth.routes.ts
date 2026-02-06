import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  changePassword,
  forgotPassword,
  resetPassword,
  refreshAccessToken,
  checkUsernameUnique,
} from "../controllers/auth.controller";
import { checkAuth } from "../middlewares/auth.middleware";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(checkAuth, logoutUser);
router.route("/change-password").post(checkAuth, changePassword);
router.route("/forgot-password").post(forgotPassword);
router.route("/reset-password").post(resetPassword);
router.route("/refresh-token").post(checkAuth, refreshAccessToken);
router.route("/check-username").get(checkUsernameUnique);

export default router