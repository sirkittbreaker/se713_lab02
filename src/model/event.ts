import { organizer } from "./organizer";

export interface Event {
  id: number;
  category: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  petAllowed: boolean;
  organizer?: organizer | null;
}
