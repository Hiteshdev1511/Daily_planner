import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from "../generated/prisma/client"
import { withAccelerate } from "@prisma/extension-accelerate";

const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({ connectionString })
const client = new PrismaClient({ adapter }).$extends(withAccelerate())

export { client }