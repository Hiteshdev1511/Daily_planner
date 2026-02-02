import { HttpStatus } from "./HttpStatus.types.js";

export type ApiErrorDetails = {
  field?: string;
  message: string;
};

export interface ApiErrorShape {
  statusCode: HttpStatus;
  message: string;
  errors?: ApiErrorDetails[];
  isOperational?: boolean;
}
