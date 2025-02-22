import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createEvents() {
  const events = [
    {
      category: "Music",
      title: "Concert",
      description: "A live concert",
      location: "London",
      date: "2021-07-01",
      time: "19:00",
      petAllowed: false,
    },
    {
      category: "Music",
      title: "Festival",
      description: "A music festival",
      location: "Manchester",
      date: "2021-07-15",
      time: "12:00",
      petAllowed: true,
    },
    {
      category: "Sports",
      title: "Football Match",
      description: "A football match",
      location: "Liverpool",
      date: "2021-08-01",
      time: "15:00",
      petAllowed: false,
    },
    {
      category: "Music",
      title: "Jazz Night",
      description: "An evening of smooth jazz",
      location: "New Orleans",
      date: "2021-09-10",
      time: "19:00",
      petAllowed: true,
    },
    {
      category: "Theatre",
      title: "Shakespeare in the Park",
      description: "A performance of Hamlet",
      location: "Central Park",
      date: "2021-10-05",
      time: "18:00",
      petAllowed: false,
    },
    {
      category: "Food",
      title: "Food Truck Festival",
      description: "A variety of food trucks offering delicious meals",
      location: "San Francisco",
      date: "2021-11-20",
      time: "12:00",
      petAllowed: true,
    },
  ];

  for (const event of events) {
    await prisma.event.create({
      data: {
        category: event.category,
        title: event.title,
        description: event.description,
        location: event.location,
        date: event.date,
        time: event.time,
        petAllowed: event.petAllowed,
      },
    });
  }
  const chiangMaiOrg = await prisma.organizer.create({
    data: {
      name: "Chiang Mai",
    },
  });

  const cmuOrg = await prisma.organizer.create({
    data: {
      name: "Chiang Mai Uniersity",
    },
  });

  const camtOrg = await prisma.organizer.create({
    data: {
      name: "CAMT",
    },
  });

  const responseEvents = await prisma.event.findMany();

  await prisma.event.update({
    where: { id: responseEvents[0].id },
    data: {
      organizer: {
        connect: {
          id: chiangMaiOrg.id,
        },
      },
    },
  });

  const responseEvents2 = await prisma.event.findMany({
    include: {
      organizer: true,
    },
  });
  console.log(responseEvents2);

  console.log("Database has been initialized with events");
}
