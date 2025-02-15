import type { Event } from "../model/event";

const events: Event[] = [
  {
    id: 1,
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
    id: 2,
    category: "Art",
    title: "Art Exhibition",
    description: "An exhibition of modern art",
    location: "Paris",
    date: "2021-08-15",
    time: "10:00",
    petAllowed: true,
    organizer: "Art World",
  },
  {
    id: 3,
    category: "Technology",
    title: "Tech Conference",
    description: "A conference about the latest in tech",
    location: "San Francisco",
    date: "2021-09-10",
    time: "09:00",
    petAllowed: false,
    organizer: "Tech Innovators",
  },
  {
    id: 4,
    category: "Food",
    title: "Food Festival",
    description: "A festival with food from around the world",
    location: "New York",
    date: "2021-10-05",
    time: "12:00",
    petAllowed: true,
    organizer: "Food Lovers",
  },
  {
    id: 5,
    category: "Sports",
    title: "Marathon",
    description: "A city marathon",
    location: "Berlin",
    date: "2021-11-20",
    time: "08:00",
    petAllowed: false,
    organizer: "Run Club",
  },
  {
    id: 6,
    category: "Theater",
    title: "Play",
    description: "A local theater play",
    location: "Chicago",
    date: "2021-12-01",
    time: "18:00",
    petAllowed: false,
    organizer: "Theater Group",
  },
];

export function getEventByCategory(category: string): Promise<Event[]> {
  const filteredEvents = events.filter((event) => event.category === category);
  return Promise.resolve(filteredEvents);
}

export function getAllEvents(): Promise<Event[]> {
  return Promise.resolve(events);
}

export function getEventById(id: number): Promise<Event | undefined> {
  const event = events.find((event) => event.id === id);
  return Promise.resolve(event);
}

export function addEvent(newEvent: Event): Promise<Event> {
  newEvent.id = events.length + 1;
  events.push(newEvent);
  return Promise.resolve(newEvent);
}
