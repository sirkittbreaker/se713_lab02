/*
  Warnings:

  - You are about to drop the column `petsAllowed` on the `event` table. All the data in the column will be lost.
  - Added the required column `petAllowed` to the `event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `event` DROP COLUMN `petsAllowed`,
    ADD COLUMN `petAllowed` BOOLEAN NOT NULL;
