/*
  Warnings:

  - The primary key for the `Collaborator` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Collaborator` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Collaborator_userId_projectId_key";

-- AlterTable
ALTER TABLE "Collaborator" DROP CONSTRAINT "Collaborator_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Collaborator_pkey" PRIMARY KEY ("userId", "projectId");

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isUserVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "passwordResetExpiry" TIMESTAMP(3),
ADD COLUMN     "passwordResetToken" TEXT;

-- CreateIndex
CREATE INDEX "Collaborator_userId_idx" ON "Collaborator"("userId");

-- CreateIndex
CREATE INDEX "Collaborator_projectId_idx" ON "Collaborator"("projectId");

-- CreateIndex
CREATE INDEX "Project_ownerId_idx" ON "Project"("ownerId");

-- CreateIndex
CREATE INDEX "Todo_projectId_idx" ON "Todo"("projectId");

-- CreateIndex
CREATE INDEX "Todo_createdBy_idx" ON "Todo"("createdBy");

-- CreateIndex
CREATE INDEX "Todo_isCompleted_idx" ON "Todo"("isCompleted");

-- CreateIndex
CREATE INDEX "Todo_deadline_idx" ON "Todo"("deadline");

-- CreateIndex
CREATE INDEX "Todo_projectId_isCompleted_idx" ON "Todo"("projectId", "isCompleted");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_username_idx" ON "User"("username");

-- CreateIndex
CREATE INDEX "User_personId_idx" ON "User"("personId");
