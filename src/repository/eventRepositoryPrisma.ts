import { PrismaClient } from "@prisma/client";
import type { Event } from "../model/event";

const prisma = new PrismaClient();

export function getEventByCategory(category: string): Promise<Event[]> {
  return prisma.event.findMany({
    where: {
      category: category,
    },
  });
}

export function getAllEvents(): Promise<Event[]> {
  return prisma.event.findMany();
}

export function getEventById(id: number): Promise<Event | null> {
  return prisma.event.findUnique({
    where: {
      id: id,
    },
  });
}

export function addEvent(newEvent: Event): Promise<Event> {
  return prisma.event.create({
    data: {
      category: newEvent.category,
      title: newEvent.title,
      description: newEvent.description,
      location: newEvent.location,
      date: newEvent.date,
      time: newEvent.time,
      petAllowed: newEvent.petAllowed,
      organizer: newEvent.organizer,
    },
  });
}

export function updateEvent(
  id: number,
  updatedEvent: Partial<Event>
): Promise<Event> {
  return prisma.event.update({
    where: {
      id: id,
    },
    data: {
      ...updatedEvent,
    },
  });
}
