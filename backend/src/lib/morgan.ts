import morgan, { StreamOptions } from "morgan";
import { logger } from "./logger";
import { EnvVariables } from "../types/common";

// Custom stream for Morgan to use Winston
const stream: StreamOptions = {
  write: (message) => logger.http(message.trim()),
};

// Skip function to exclude healthcheck requests from logs
const skip = () => {
  return process.env.NODE_ENV === "production";
};

// Custom Morgan format for different environments
const format = () => {
  if (EnvVariables.NODE_ENV === "production") {
    return "combined";
  } else {
    return "dev";
  }
};

// Create Morgan middleware with Winston integration
const morganMiddleware = morgan(format(), {
  stream,
  skip: (req) => {
    // Skip healthcheck endpoint logging to reduce noise
    if (req.path === "/api/v1/healthcheck") {
      return true;
    }
    return false;
  },
});

export { morganMiddleware };
