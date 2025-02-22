import { participant } from "./../../node_modules/.prisma/client/index.d";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createParticipants() {
  const participants = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
    },
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
    },
    {
      name: "Bob Brown",
      email: "bob.brown@example.com",
    },
    {
      name: "Charlie Davis",
      email: "charlie.davis@example.com",
    },
  ];

  for (const participant of participants) {
    await prisma.participant.create({
      data: participant,
    });
  }

  const responseParticipants = await prisma.participant.findMany();
  const responseEvents = await prisma.event.findMany();

  addEvent(responseParticipants[0].id, responseEvents[0].id);
  addEvent(responseParticipants[0].id, responseEvents[1].id);
  addEvent(responseParticipants[0].id, responseEvents[2].id);
  addEvent(responseParticipants[1].id, responseEvents[3].id);
  addEvent(responseParticipants[1].id, responseEvents[4].id);
  addEvent(responseParticipants[1].id, responseEvents[5].id);
  addEvent(responseParticipants[2].id, responseEvents[0].id);
  addEvent(responseParticipants[2].id, responseEvents[1].id);
  addEvent(responseParticipants[3].id, responseEvents[2].id);
  addEvent(responseParticipants[4].id, responseEvents[3].id);
  addEvent(responseParticipants[4].id, responseEvents[4].id);
  addEvent(responseParticipants[1].id, responseEvents[5].id);

  const responseParticipants2 = await prisma.participant.findMany({
    include: {
      events: true,
    },
  });

  const responseEvents2 = await prisma.event.findMany({
    include: {
      participants: true,
    },
  });
  console.log(responseParticipants2);

  console.log(responseEvents2);
}

async function addEvent(participantId: number, eventId: number) {
  await prisma.participant.update({
    where: { id: participantId },
    data: {
      events: {
        connect: {
          id: eventId,
        },
      },
    },
  });
}
