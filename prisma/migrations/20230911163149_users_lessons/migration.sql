/*
  Warnings:

  - You are about to drop the `LessonsForUsers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "LessonsForUsers" DROP CONSTRAINT "LessonsForUsers_lessonId_fkey";

-- DropForeignKey
ALTER TABLE "LessonsForUsers" DROP CONSTRAINT "LessonsForUsers_userId_fkey";

-- DropTable
DROP TABLE "LessonsForUsers";

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
