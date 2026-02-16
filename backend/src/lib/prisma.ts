import "dotenv/config";
import { PrismaClient } from "../../generated/prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

const prismaClientSingleton = () => {
  return new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
    accelerateUrl: process.env.ACCELERATE_URL as string,
  }).$extends(withAccelerate());
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const client = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = client;

export { client };
