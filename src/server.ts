import express, { Request, Response } from "express";

const app = express();
const port = 3000;

interface Event {
  id: number;
  category: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  petAllowed: boolean;
  organizer: string;
}

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

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.get("/test", (req: Request, res: Response) => {
  //   res.send("Hello World! 3");

  //   let returnObj = {
  //     name: "test",
  //     age: 20,
  //     address: "Thai",
  //   };
  //   res.send(returnObj);

  const id = req.query.id;
  const output = `id: ${id}`;
  res.send(output);
});
app.get("/events", (req: Request, res: Response) => {
  if (req.query.category) {
    const category = req.query.category;
    const filteredEvents = events.filter(
      (event) => event.category === category
    );
    res.json(filteredEvents);
  } else {
    res.json(events);
  }
});
app.get("/events/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const event = events.find((event) => event.id === id);
  if (event) {
    res.json(event);
  } else {
    res.status(404).send("Event not found");
  }
});
app.post("/events", (req: Request, res: Response) => {
  const newEvent: Event = req.body;
  newEvent.id = events.length + 1;
  events.push(newEvent);
  res.json(newEvent);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
