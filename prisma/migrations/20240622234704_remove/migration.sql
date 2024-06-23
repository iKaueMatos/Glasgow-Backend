/*
  Warnings:

  - You are about to drop the column `driverLicense` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `User_driverLicense_key` ON `User`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `driverLicense`;
