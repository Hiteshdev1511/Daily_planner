import express, { Application } from "express";
import cors from "cors";
import { EnvVariables } from "./types/common";
import cookieParser from "cookie-parser";
import errorHandler from "./utils/errorMiddleware";

const app: Application = express();

// CORS configuration
const corsOptions = {
  origin: EnvVariables.CORS_ORIGIN || "http://localhost:5173",
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
};

app.use(cors(corsOptions));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

import {
  healthcheckRouter,
  authRouter,
  userRouter,
  collaboratorRouter,
  projectRouter,
  todoRouter,
} from "./routes";

app.use("/api/v1/healthcheck", healthcheckRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/collaborator", collaboratorRouter);
app.use("/api/v1/projects", projectRouter);
app.use("/api/v1/todo", todoRouter);

app.use(errorHandler);

export { app };
