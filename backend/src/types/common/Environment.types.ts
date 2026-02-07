import { configDotenv } from "dotenv";

configDotenv({ path: ".env" });

export type Environment = "development" | "test" | "production";

interface EnvConfig {
  NODE_ENV: string;
  PORT: number;
  CORS_ORIGIN: string;
  DATABASE_URL: string;
  ACCELERATE_URL: string;
  ACCESS_TOKEN_SECRET: string;
  ACCESS_TOKEN_EXPIRY: string;
  REFRESH_TOKEN_SECRET: string;
  REFRESH_TOKEN_EXPIRY: string;
}

export const EnvVariables: EnvConfig = {
  NODE_ENV:process.env.NODE_ENV || "development",
  PORT: Number(process.env.PORT) || 4000,
  CORS_ORIGIN: process.env.CORS_ORIGIN || "",
  DATABASE_URL: process.env.DIRECT_DATABASE_URL || "",
  ACCELERATE_URL: process.env.DATABASE_URL || "",
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || "",
  ACCESS_TOKEN_EXPIRY: process.env.ACCESS_TOKEN_EXPIRY || "",
  REFRESH_TOKEN_EXPIRY: process.env.REFRESH_TOKEN_EXPIRY || "",
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || "",
};
