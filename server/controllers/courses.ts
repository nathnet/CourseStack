import { Router, Request, Response } from "express";
import { getAllCourses, getCourseById } from "../repositories/courses.js";

const router: Router = Router();

router.get("/api/courses", async (_req: Request, res: Response) => {
  try {
    const courses = await getAllCourses();
    res.json(courses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch courses" });
  }
});

router.get("/api/courses/:courseId", async (req: Request<{ courseId: string }>, res: Response) => {
  try {
    const course = await getCourseById(req.params.courseId);
    if (!course) {
      res.status(404).json({ error: "Course not found" });
      return;
    }
    res.json(course);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch course" });
  }
});

export default router;
