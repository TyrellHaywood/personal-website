/*
  Warnings:

  - Added the required column `description` to the `CommunityPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `HardwarePost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `PersonalPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `SoftwarePost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CommunityPost" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "HardwarePost" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PersonalPost" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SoftwarePost" ADD COLUMN     "description" TEXT NOT NULL;
