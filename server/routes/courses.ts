import { Router, Request, Response } from "express";
import { courses, Course } from "../data/courses.js";

const router: Router = Router();

router.get("/api/courses", (_req: Request, res: Response) => {
  res.json(courses);
});

router.get("/api/courses/:courseId", (req: Request, res: Response) => {
  const course: Course | undefined = courses.find(
    (c: Course) => c.courseId === req.params.courseId
  );
  if (!course) {
    res.status(404).json({ error: "Course not found" });
    return;
  }
  res.json(course);
});

export default router;
