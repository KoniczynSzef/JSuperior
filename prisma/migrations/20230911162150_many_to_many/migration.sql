-- DropForeignKey
ALTER TABLE "Lesson" DROP CONSTRAINT "Lesson_userId_fkey";

-- CreateTable
CREATE TABLE "LessonsForUsers" (
    "userId" TEXT NOT NULL,
    "lessonId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LessonsForUsers_pkey" PRIMARY KEY ("userId","lessonId")
);

-- AddForeignKey
ALTER TABLE "LessonsForUsers" ADD CONSTRAINT "LessonsForUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LessonsForUsers" ADD CONSTRAINT "LessonsForUsers_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
