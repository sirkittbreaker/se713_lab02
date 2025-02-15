import type { Event } from "../model/event.ts";
import {
  getAllEvents as allEvents,
  getEventById as eventById,
  addEvent as addNewEvent,
  getEventByCategory as eventByCategory,
} from "../repository/eventRepository.js";

export function getEventByCategory(category: string): Promise<Event[]> {
  return eventByCategory(category);
}

export function getAllEvents(): Promise<Event[]> {
  return allEvents();
}

export function getEventById(id: number): Promise<Event | undefined> {
  return eventById(id);
}

export function addEvent(newEvent: Event): Promise<Event> {
  return addNewEvent(newEvent);
}
