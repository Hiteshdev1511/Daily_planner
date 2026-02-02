import { Request, Response, NextFunction, RequestHandler } from "express";

const asyncHandler =
  (handler: RequestHandler) =>
  async (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(handler(req, res, next)).catch(next);
  };

export { asyncHandler };
