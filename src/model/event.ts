import { organizer } from "./organizer";

export interface Event {
  id?: number;
  category?: string;
  title?: string;
  description?: string;
  location?: string;
  date?: string;
  time?: string;
  petAllowed?: boolean;
  organizerId?: number | null;
  organizer?: organizer | null;
}
