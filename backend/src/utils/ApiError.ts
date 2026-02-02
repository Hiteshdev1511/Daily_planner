import { ApiErrorDetails, ApiErrorShape, HttpStatus } from "../types/index.js";

export class ApiError extends Error implements ApiErrorShape {
  statusCode: HttpStatus;
  isOperational: boolean;
  errors?: ApiErrorDetails[];

  constructor(
    statusCode: HttpStatus,
    message: string,
    errors?: ApiErrorDetails[],
    isOperational = true,
  ) {
    super(message);

    this.statusCode = statusCode;
    this.errors = errors;
    this.isOperational = isOperational;

    Error.captureStackTrace(this, this.constructor);
  }
}
