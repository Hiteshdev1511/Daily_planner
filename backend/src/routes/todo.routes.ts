import { Router } from "express";
import {
  createTodo,
  getProjectTodos,
  getTodoById,
  updateTodo,
  completeTodo,
  changeDeadline,
  deleteTodo,
  getUserTodos
} from "../controllers/todo.controller";
import { checkAuth } from "../middlewares/auth.middleware";

const router = Router();

router.use(checkAuth);

router.route("/").get(getUserTodos)
router.route("/project/:projectId").post(createTodo).get(getProjectTodos)
router.route("/:todoId").get(getTodoById).patch(updateTodo).delete(deleteTodo);
router.route("/:todoId/complete").patch(completeTodo);
router.route("/:todoId/deadline").patch(changeDeadline);

export default router;
