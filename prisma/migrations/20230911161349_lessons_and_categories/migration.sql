/*
  Warnings:

  - The values [Basics] on the enum `Category` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `progress` on the `Lesson` table. All the data in the column will be lost.
  - You are about to drop the column `quizCorrectAnswers` on the `Lesson` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Lesson` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Category_new" AS ENUM ('GetStarted');
ALTER TABLE "Lesson" ALTER COLUMN "category" DROP DEFAULT;
ALTER TABLE "Lesson" ALTER COLUMN "category" TYPE "Category_new" USING ("category"::text::"Category_new");
ALTER TYPE "Category" RENAME TO "Category_old";
ALTER TYPE "Category_new" RENAME TO "Category";
DROP TYPE "Category_old";
COMMIT;

-- AlterTable
ALTER TABLE "Lesson" DROP COLUMN "progress",
DROP COLUMN "quizCorrectAnswers",
ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "category" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
