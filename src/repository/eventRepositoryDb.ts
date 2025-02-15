import type { Event } from "../model/event";
import connection from "../db";
import e from "express";

export async function getEventByCategory(category: string): Promise<Event[]> {
  const [rows] = await connection.execute(
    "SELECT * FROM events WHERE category = ?",
    [category]
  );
  return rows as Event[];
}

export async function getAllEvents(): Promise<Event[]> {
  const [rows] = await connection.execute("SELECT * FROM events");
  return rows as Event[];
}

export async function getEventById(id: number): Promise<Event | undefined> {
  const [rows] = await connection.execute("SELECT * FROM events WHERE id = ?", [
    id,
  ]);
  const event = rows as Event[];
  return event.length > 0 ? event[0] : undefined;
}

export async function addEvent(newEvent: Event): Promise<Event> {
  const {
    category,
    title,
    description,
    location,
    date,
    time,
    petAllowed,
    organizer,
  } = newEvent;
  const [result] = await connection.execute(
    "INSERT INTO events (category, title, description, location, date, time, petAllowed, organizer) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [category, title, description, location, date, time, petAllowed, organizer]
  );
  newEvent.id = (result as any).insertId;
  return newEvent;
}

export async function updateEvent(
  id: number,
  updatedEvent: Partial<Event>
): Promise<void> {
  const {
    category,
    title,
    description,
    location,
    date,
    time,
    petAllowed,
    organizer,
  } = updatedEvent;
  await connection.execute(
    "UPDATE events SET category = ?, title = ?, description = ?, location = ?, date = ?, time = ?, petAllowed = ?, organizer = ? WHERE id = ?",
    [
      category,
      title,
      description,
      location,
      date,
      time,
      petAllowed,
      organizer,
      id,
    ]
  );
}
