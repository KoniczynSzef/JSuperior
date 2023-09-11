-- CreateEnum
CREATE TYPE "Category" AS ENUM ('GetStarted', 'Basics');

-- CreateTable
CREATE TABLE "Lesson" (
    "id" TEXT NOT NULL,
    "category" "Category" NOT NULL DEFAULT 'GetStarted',
    "quizCorrectAnswers" BOOLEAN[],
    "progress" INTEGER NOT NULL,

    CONSTRAINT "Lesson_pkey" PRIMARY KEY ("id")
);
