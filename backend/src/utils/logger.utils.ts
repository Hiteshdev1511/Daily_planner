import { logger } from "../lib/logger";

/**
 * Utility functions for logging across the application
 * Makes it easy to log from services and controllers
 */

export const logInfo = (message: string, meta?: Record<string, any>) => {
  logger.info(message, meta);
};

export const logError = (
  message: string,
  error?: any,
  meta?: Record<string, any>,
) => {
  const errorMeta = {
    ...meta,
    errorStack: error instanceof Error ? error.stack : undefined,
  };
  logger.error(message, errorMeta);
};

export const logWarn = (message: string, meta?: Record<string, any>) => {
  logger.warn(message, meta);
};

export const logDebug = (message: string, meta?: Record<string, any>) => {
  logger.debug(message, meta);
};

export const logHttp = (message: string, meta?: Record<string, any>) => {
  logger.http(message, meta);
};

/**
 * Log API request start
 */
export const logRequestStart = (
  method: string,
  path: string,
  userId?: string,
) => {
  logger.info(`${method} ${path} - Request started`, { userId });
};

/**
 * Log API request completion
 */
export const logRequestEnd = (
  method: string,
  path: string,
  statusCode: number,
  duration: number,
  userId?: string,
) => {
  logger.info(`${method} ${path} - Request completed`, {
    statusCode,
    duration: `${duration}ms`,
    userId,
  });
};

/**
 * Log database operation
 */
export const logDatabaseOperation = (
  operation: string,
  model: string,
  data?: Record<string, any>,
) => {
  logger.debug(`Database operation: ${operation} on ${model}`, data);
};
