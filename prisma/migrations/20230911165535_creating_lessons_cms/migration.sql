/*
  Warnings:

  - You are about to drop the column `userId` on the `Lesson` table. All the data in the column will be lost.
  - Added the required column `Content` to the `Lesson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Lesson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hasQuiz` to the `Lesson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Lesson` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Lesson" DROP CONSTRAINT "Lesson_userId_fkey";

-- AlterTable
ALTER TABLE "Lesson" DROP COLUMN "userId",
ADD COLUMN     "Content" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "hasQuiz" BOOLEAN NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
