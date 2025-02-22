import { createEvents } from "./db/createEvents";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

createEvents()
  .catch((e) => {
    console.error(e);
    process.exit();
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
