import type { Event } from "../model/event";
// import * as repo from "../repository/eventRepository";
// import * as repo from "../repository/eventRepositoryDb";
import * as repo from "../repository/eventRepositoryPrisma";

export function getEventByCategory(category: string) {
  return repo.getEventByCategory(category);
}

export function getAllEvents() {
  return repo.getAllEventsWithOrganizer();
}

export function getEventById(id: number) {
  return repo.getEventById(id);
}

export function addEvent(newEvent: Event) {
  return repo.addEvent(newEvent);
}

export function updateEvent(id: number, updatedEvent: Partial<Event>) {
  return repo.updateEvent(id, updatedEvent);
}
