import { ErrorRequestHandler } from "express";
import { HttpStatus } from "../types/api";
import { ApiError } from "./ApiError";

const errorHandler :ErrorRequestHandler = (err, req, res, next) =>{
    
    let error: ApiError = err instanceof ApiError ? err : new ApiError(HttpStatus.SERVER_ERROR, "Something went wrong", false)
    
    if (error.isOperational) {
        return res.status(error.statusCode).json({message:error.message,stack:error.stack})
    } else {
       return res.status(HttpStatus.SERVER_ERROR).json({message:"Internal server occurred"})
    }
}

export default errorHandler