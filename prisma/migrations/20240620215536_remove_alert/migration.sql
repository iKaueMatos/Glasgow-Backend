/*
  Warnings:

  - You are about to drop the `Alert` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cpf` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `crm` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uf` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Alert` DROP FOREIGN KEY `Alert_patientId_fkey`;

-- AlterTable
ALTER TABLE `Doctor` ADD COLUMN `cpf` VARCHAR(11) NOT NULL,
    ADD COLUMN `crm` VARCHAR(30) NOT NULL,
    ADD COLUMN `uf` VARCHAR(2) NOT NULL;

-- AlterTable
ALTER TABLE `Patient` ADD COLUMN `cpf` VARCHAR(11) NOT NULL;

-- DropTable
DROP TABLE `Alert`;
