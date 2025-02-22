import { createEvents } from "./db/createEvents";
import { PrismaClient } from "@prisma/client";
import { createParticipants } from "./db/createParticipants";
import { create } from "domain";

const prisma = new PrismaClient();

async function main() {
  await createEvents();
  await createParticipants();
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
