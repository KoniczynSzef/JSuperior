/*
  Warnings:

  - You are about to drop the column `Content` on the `Lesson` table. All the data in the column will be lost.
  - Added the required column `content` to the `Lesson` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `category` on the `Lesson` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Lesson" DROP COLUMN "Content",
ADD COLUMN     "content" TEXT NOT NULL,
DROP COLUMN "category",
ADD COLUMN     "category" TEXT NOT NULL;

-- DropEnum
DROP TYPE "Category";
