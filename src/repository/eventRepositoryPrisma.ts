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
    select: {
      title: true,
      time: true,
      organizerId: true,
    },
  });
}

export function addEvent(newEvent: Event): Promise<Event> {
  return prisma.event.create({
    data: {
      category: newEvent.category || "",
      title: newEvent.title || "",
      description: newEvent.description || "",
      location: newEvent.location || "",
      date: newEvent.date || "",
      time: newEvent.time || "",
      petAllowed: newEvent.petAllowed || false,
    },
  });
}

export function updateEvent(
  id: number,
  updatedEvent: Partial<Event>
): Promise<Event> {
  const { id: _, organizerId: __, ...data } = updatedEvent; // ไม่ส่ง id ในข้อมูลที่จะอัพเดท
  return prisma.event.update({
    where: {
      id: id,
    },
    data: {
      ...data,
      organizer: updatedEvent.organizer
        ? { connect: { id: updatedEvent.organizer.id } }
        : undefined,
      participants: updatedEvent.participants
        ? {
            set: updatedEvent.participants.map((participant) => ({
              id: participant.id,
            })),
          }
        : undefined,
    },
  });
}

export function getAllEventsWithOrganizer(): Promise<Event[]> {
  return prisma.event.findMany({
    select: {
      id: true,
      category: true,
      organizerId: false,
      organizer: {
        select: {
          name: true,
        },
      },
      participants: {
        select: {
          id: true,
          name: true,
          email: true,
          events: true,
        },
      },
    },
  });
}
