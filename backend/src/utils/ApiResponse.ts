import { ApiResponseShape, HttpStatus } from "../types/api";

export class ApiResponse<TData = unknown, TMeta = unknown> implements ApiResponseShape<
  TData,
  TMeta
> {
  statusCode: HttpStatus;
  success: true = true;
  message?: string;
  data?: TData;
  meta?: TMeta;

  constructor(
    statusCode: HttpStatus,
    message?: string,
    data?: TData,
    meta?: TMeta,
  ) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.meta = meta;
  }
}