-- CreateTable
CREATE TABLE `participant` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_eventToparticipant` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_eventToparticipant_AB_unique`(`A`, `B`),
    INDEX `_eventToparticipant_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_eventToparticipant` ADD CONSTRAINT `_eventToparticipant_A_fkey` FOREIGN KEY (`A`) REFERENCES `event`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_eventToparticipant` ADD CONSTRAINT `_eventToparticipant_B_fkey` FOREIGN KEY (`B`) REFERENCES `participant`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
