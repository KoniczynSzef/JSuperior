/*
  Warnings:

  - You are about to drop the column `category` on the `Lesson` table. All the data in the column will be lost.
  - You are about to drop the column `hasQuiz` on the `Lesson` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Lesson" DROP COLUMN "category",
DROP COLUMN "hasQuiz";
