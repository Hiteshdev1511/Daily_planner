import { HttpStatus } from "./HttpStatus.types.js";

export interface ApiResponseShape<TData=unknown,TMeta=unknown> {
  statusCode: HttpStatus;
  message?: string;
  success: true;
  data?: TData;
  meta?: TMeta;
}