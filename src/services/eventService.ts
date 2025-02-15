import type { Event } from "../model/event";
// import * as repo from "../repository/eventRepository";
import * as repo from "../repository/eventRepositoryDb";

export function getEventByCategory(category: string): Promise<Event[]> {
  return repo.getEventByCategory(category);
}

export function getAllEvents(): Promise<Event[]> {
  return repo.getAllEvents();
}

export function getEventById(id: number): Promise<Event | undefined> {
  return repo.getEventById(id);
}

export function addEvent(newEvent: Event): Promise<Event> {
  return repo.addEvent(newEvent);
}

export function updateEvent(
  id: number,
  updatedEvent: Partial<Event>
): Promise<void> {
  return repo.updateEvent(id, updatedEvent);
}
