/*
  Warnings:

  - The `role` column on the `Collaborator` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'VIEWER', 'OWNER', 'EDITOR');

-- AlterTable
ALTER TABLE "Collaborator" DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'VIEWER';
