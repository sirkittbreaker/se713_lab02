import { Router, Request, Response } from "express";
import {
  getAllEvents,
  getEventByCategory,
  getEventById,
  addEvent,
  updateEvent,
} from "../services/eventService";

const router = Router();

router.get("/events", async (req: Request, res: Response) => {
  if (req.query.category) {
    const category = req.query.category;
    const filteredEvents = await getEventByCategory(category as string);
    res.json(filteredEvents);
  } else {
    res.json(await getAllEvents());
  }
});

router.get("/events/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const event = await getEventById(id);
  if (event) {
    res.json(event);
  } else {
    res.status(404).send("Event not found");
  }
});

router.post("/events", async (req: Request, res: Response) => {
  const newEvent = req.body;
  await addEvent(newEvent);
  res.json(newEvent);
});

router.put("/events/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const event = await getEventById(id);
  if (event) {
    await updateEvent(id, req.body); // เรียกใช้ updateEvent
    const updatedEvent = await getEventById(id); // ดึงข้อมูลเหตุการณ์ที่อัปเดตแล้ว
    res.json(updatedEvent);
  } else {
    res.status(404).send("Event not found");
  }
});

export default router;
