import { Router, Request, Response } from "express";
import { getAllCourses, getCourseById, getCourseMeta } from "../repositories/courses.js";

const router: Router = Router();

const MAX_FILTER_LENGTH = 100;

const asString = (val: unknown): string | undefined =>
  typeof val === "string" && val.length > 0 && val.length <= MAX_FILTER_LENGTH
    ? val
    : undefined;

router.get("/api/courses/filters", async (_req: Request, res: Response) => {
  try {
    const filters = await getCourseMeta();
    res.json(filters);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch course filters" });
  }
});

router.get("/api/courses", async (req: Request, res: Response) => {
  try {
    const courses = await getAllCourses({
      provider: asString(req.query.provider),
      skillLevel: asString(req.query.skillLevel),
      topic: asString(req.query.topic),
      language: asString(req.query.language),
    });
    res.json(courses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch courses" });
  }
});

router.get("/api/courses/:courseId", async (req: Request<{ courseId: string }>, res: Response) => {
  try {
    const { courseId } = req.params;
    if (courseId.length > MAX_FILTER_LENGTH) {
      res.status(404).json({ error: "Course not found" });
      return;
    }
    const course = await getCourseById(courseId);
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
