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
      organizer: "Live Nation",
    },
    {
      category: "Music",
      title: "Festival",
      description: "A music festival",
      location: "Manchester",
      date: "2021-07-15",
      time: "12:00",
      petAllowed: true,
      organizer: "Festival Republic",
    },
    {
      category: "Sports",
      title: "Football Match",
      description: "A football match",
      location: "Liverpool",
      date: "2021-08-01",
      time: "15:00",
      petAllowed: false,
      organizer: "Premier League",
    },
    {
      category: "Music",
      title: "Jazz Night",
      description: "An evening of smooth jazz",
      location: "New Orleans",
      date: "2021-09-10",
      time: "19:00",
      petAllowed: true,
      organizer: "Jazz Fest",
    },
    {
      category: "Theatre",
      title: "Shakespeare in the Park",
      description: "A performance of Hamlet",
      location: "Central Park",
      date: "2021-10-05",
      time: "18:00",
      petAllowed: false,
      organizer: "NYC Theatre Group",
    },
    {
      category: "Food",
      title: "Food Truck Festival",
      description: "A variety of food trucks offering delicious meals",
      location: "San Francisco",
      date: "2021-11-20",
      time: "12:00",
      petAllowed: true,
      organizer: "Foodie Events",
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
        organizer: event.organizer,
      },
    });
  }
  console.log("Database has been initialized with events");
}
