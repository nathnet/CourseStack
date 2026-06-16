import pool from "./db.js";
import { courses } from "../data/courses.js";

const createCoursesTable = async (): Promise<void> => {
  try {
    await pool.query(`
      DROP TABLE IF EXISTS courses;
      CREATE TABLE courses (
        course_id   TEXT PRIMARY KEY,
        title       TEXT NOT NULL,
        provider    TEXT NOT NULL,
        description TEXT NOT NULL,
        skill_level TEXT NOT NULL CHECK (skill_level IN ('Beginner', 'Intermediate', 'Advanced')),
        topics      TEXT[] NOT NULL DEFAULT '{}',
        languages   TEXT[] NOT NULL DEFAULT '{}',
        url         TEXT NOT NULL,
        image       TEXT NOT NULL
      );
    `);
  } catch (err) {
    throw new Error("createCoursesTable failed", { cause: err });
  }
};

const seedCoursesTable = async (): Promise<void> => {
  try {
    for (const course of courses) {
      await pool.query(
        `INSERT INTO courses (course_id, title, provider, description, skill_level, topics, languages, url, image)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
        [course.courseId, course.title, course.provider, course.description, course.skillLevel, course.topics, course.languages, course.url, course.image]
      );
    }
  } catch (err) {
    throw new Error("seedCoursesTable failed", { cause: err });
  }
};

const reset = async (): Promise<void> => {
  try {
    await createCoursesTable();
    await seedCoursesTable();
    console.log("Database reset successfully.");
  } catch (err) {
    console.error("Database reset failed:", err);
    process.exit(1);
  } finally {
    await pool.end();
  }
};

reset();
