import { ApiErrorDetails, ApiErrorShape, HttpStatus } from "../types/api"

export class ApiError extends Error implements ApiErrorShape {
  statusCode: HttpStatus;
  isOperational: boolean;
  errors?: ApiErrorDetails[];

  constructor(
    statusCode: HttpStatus,
    message: string,
    isOperational = true,
    errors?: ApiErrorDetails[],
  ) {
    super(message);

    this.statusCode = statusCode;
    this.errors = errors;
    this.isOperational = isOperational;

    Error.captureStackTrace(this, this.constructor);
  }
}
