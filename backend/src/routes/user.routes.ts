import { Router } from "express";
import { getCurrentUser, updateProfile } from "../controllers/user.controller";
import { checkAuth } from "../middlewares/auth.middleware";

const router = Router();

router.use(checkAuth);

router.route("/me").get(getCurrentUser);
router.route("/profile").put(updateProfile);

export default router;
