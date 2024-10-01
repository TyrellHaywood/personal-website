/*
  Warnings:

  - Added the required column `year` to the `CommunityPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `HardwarePost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `PersonalPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `SoftwarePost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CommunityPost" ADD COLUMN     "year" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "HardwarePost" ADD COLUMN     "year" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "PersonalPost" ADD COLUMN     "year" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "SoftwarePost" ADD COLUMN     "year" INTEGER NOT NULL;
