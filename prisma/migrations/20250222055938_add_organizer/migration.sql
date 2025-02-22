/*
  Warnings:

  - You are about to drop the column `organizer` on the `event` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `event` DROP COLUMN `organizer`,
    ADD COLUMN `organizerId` INTEGER NULL;

-- CreateTable
CREATE TABLE `organizer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `event` ADD CONSTRAINT `event_organizerId_fkey` FOREIGN KEY (`organizerId`) REFERENCES `organizer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
