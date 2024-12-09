/*
  Warnings:

  - Added the required column `link` to the `CommunityPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `textArea` to the `CommunityPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `link` to the `HardwarePost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `textArea` to the `HardwarePost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `link` to the `PersonalPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `textArea` to the `PersonalPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `link` to the `SoftwarePost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `textArea` to the `SoftwarePost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CommunityPost" ADD COLUMN     "link" TEXT NOT NULL,
ADD COLUMN     "textArea" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "HardwarePost" ADD COLUMN     "link" TEXT NOT NULL,
ADD COLUMN     "textArea" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PersonalPost" ADD COLUMN     "link" TEXT NOT NULL,
ADD COLUMN     "textArea" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SoftwarePost" ADD COLUMN     "link" TEXT NOT NULL,
ADD COLUMN     "textArea" TEXT NOT NULL;
