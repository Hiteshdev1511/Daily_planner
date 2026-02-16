import { ErrorRequestHandler } from "express";
import { HttpStatus } from "../types/api";
import { ApiError } from "./ApiError";
import { logger } from "../lib/logger";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let error: ApiError;
  if (err instanceof ApiError) {
    error = err;
  } else if (err instanceof Error) {
    error = new ApiError(HttpStatus.SERVER_ERROR, err.message, false);
  } else {
    error = new ApiError(
      HttpStatus.SERVER_ERROR,
      "Something went wrong",
      false,
    );
  }

  // Log the error
  logger.error("Request error", {
    statusCode: error.statusCode,
    message: error.message,
    path: req.path,
    method: req.method,
    ip: req.ip,
    errors: error.errors,
    stack: error.stack,
  });

  const response = {
    success: false,
    statusCode: error.statusCode,
    message: error.message,
    ...(error.errors && { errors: error.errors }),
    ...(process.env.NODE_ENV === "development" && { stack: error.stack }),
  };

  return res.status(error.statusCode).json(response);
};

export default errorHandler;
