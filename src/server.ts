import express, { Request, Response } from "express";
import {
  getAllEvents,
  getEventByCategory,
  getEventById,
  addEvent,
  Event,
} from "./services/eventService";

const app = express();
const port = 3000;

app.use(express.json());

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
    const filteredEvents = getEventByCategory(category as string);
    res.json(filteredEvents);
  } else {
    res.json(getAllEvents());
  }
});
app.get("/events/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const event = getEventById(id);
  if (event) {
    res.json(event);
  } else {
    res.status(404).send("Event not found");
  }
});
app.post("/events", (req: Request, res: Response) => {
  const newEvent = req.body;
  addEvent(newEvent);
  res.json(newEvent);
});
app.put("/events/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const event = getEventById(id);
  if (event) {
    Object.assign(event, req.body);
    res.json(event);
  } else {
    res.status(404).send("Event not found");
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
