import pool from "../config/db.js";
import { Course } from "../data/courses.js";

const SELECT_FIELDS = `
  course_id   AS "courseId",
  title,
  provider,
  description,
  skill_level AS "skillLevel",
  topics,
  languages,
  url,
  image
`;

export const getAllCourses = async (): Promise<Course[]> => {
  const { rows } = await pool.query<Course>(`SELECT ${SELECT_FIELDS} FROM courses`);
  return rows;
};

export const getCourseById = async (courseId: string): Promise<Course | null> => {
  const { rows } = await pool.query<Course>(
    `SELECT ${SELECT_FIELDS} FROM courses WHERE course_id = $1`,
    [courseId]
  );
  return rows[0] ?? null;
};
