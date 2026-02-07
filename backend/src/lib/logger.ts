import winston from "winston";
import { EnvVariables } from "../types/common";

const isDevelopment = EnvVariables.NODE_ENV === "development";
const isProduction = EnvVariables.NODE_ENV === "production";

// Custom format for logs
const customFormat = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  winston.format.errors({ stack: true }),
  winston.format.splat(),
  winston.format.json(),
  winston.format.printf(({ timestamp, level, message, ...meta }) => {
    const metaStr = Object.keys(meta).length
      ? JSON.stringify(meta, null, 2)
      : "";
    return `[${timestamp}] ${level.toUpperCase()}: ${message} ${metaStr}`;
  })
);

// Console format for development
const consoleFormat = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  winston.format.colorize(),
  winston.format.printf(({ timestamp, level, message, ...meta }) => {
    const metaStr = Object.keys(meta).length
      ? JSON.stringify(meta, null, 2)
      : "";
    return `[${timestamp}] ${level}: ${message} ${metaStr}`;
  })
);

// Create logs directory if it doesn't exist
import fs from "fs";
const logsDir = "logs";
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

// Configure transports
const transports: winston.transport[] = [
  // Console transport - always enabled
  new winston.transports.Console({
    format: isDevelopment ? consoleFormat : customFormat,
  }),

  // File transports
  new winston.transports.File({
    filename: `${logsDir}/error.log`,
    level: "error",
    format: customFormat,
    maxsize: 10 * 1024 * 1024, // 10MB
    maxFiles: 10, // Keep 10 files
  }),

  new winston.transports.File({
    filename: `${logsDir}/combined.log`,
    format: customFormat,
    maxsize: 10 * 1024 * 1024, // 10MB
    maxFiles: 10, // Keep 10 files
  }),
];

// Production-specific configurations
if (isProduction) {
  transports.push(
    new winston.transports.File({
      filename: `${logsDir}/production.log`,
      level: "info",
      format: customFormat,
      maxsize: 10 * 1024 * 1024, // 10MB
      maxFiles: 10,
    })
  );
}

// Create logger
const logger = winston.createLogger({
  level: isDevelopment ? "debug" : "info",
  transports,
  exceptionHandlers: [
    new winston.transports.File({
      filename: `${logsDir}/exceptions.log`,
      format: customFormat,
    }),
  ],
  rejectionHandlers: [
    new winston.transports.File({
      filename: `${logsDir}/rejections.log`,
      format: customFormat,
    }),
  ],
});

// Exit gracefully on handled exceptions
logger.exitOnError = false;

export { logger };
