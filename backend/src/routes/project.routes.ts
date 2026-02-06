import { Router } from "express";
import {
  createProject,
  getUserProjects,
  getProjectById,
  updateProject,
  deleteProject,
} from "../controllers/project.controller";
import { checkAuth } from "../middlewares/auth.middleware";

const router = Router();

router.use(checkAuth);

router.route("/").post(createProject).get(getUserProjects);
router
  .route("/:projectId")
  .get(getProjectById)
  .patch(updateProject)
  .delete(deleteProject);

export default router;
