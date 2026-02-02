/**
 * Known Prisma error codes we explicitly handle.
 * This prevents Prisma errors from leaking to the API layer.
 */

export enum PrismaErrorCode {
  UniqueConstraintFailed = "P2002",
  ForeignKeyConstraintFailed = "P2003",
  RecordNotFound = "P2025",
}

export interface PrismaErrorMeta {
  target?: string[];
  field_name?: string;
}

export interface PrismaKnownError {
  code: PrismaErrorCode;
  message: string;
  meta?: PrismaErrorMeta;
}
