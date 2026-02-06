import { Router } from "express";
import {
  addCollaborator,
  getProjectCollaborators,
  updateCollaboratorRole,
  removeCollaborator,
} from "../controllers/collaborator.controller";
import { checkAuth } from "../middlewares/auth.middleware";

const router = Router();

router.use(checkAuth);

router.route("/:projectId").post(addCollaborator).get(getProjectCollaborators);
router
  .route("/:projectId/:collaboratorId")
  .patch(updateCollaboratorRole)
  .delete(removeCollaborator);

export default router;
