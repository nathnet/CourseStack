import pool from "../config/db.js";
import { Course } from "../data/courses.js";

export interface CourseFilters {
  provider?: string;
  skillLevel?: string;
  topic?: string;
  language?: string;
}

export interface CourseMeta {
  providers: string[];
  skillLevels: string[];
  topics: string[];
  languages: string[];
}

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

export const getAllCourses = async (filters: CourseFilters = {}): Promise<Course[]> => {
  const conditions: string[] = [];
  const values: string[] = [];

  if (filters.provider) {
    values.push(filters.provider);
    conditions.push(`provider = $${values.length}`);
  }
  if (filters.skillLevel) {
    values.push(filters.skillLevel);
    conditions.push(`skill_level = $${values.length}`);
  }
  if (filters.topic) {
    values.push(filters.topic);
    conditions.push(`$${values.length} = ANY(topics)`);
  }
  if (filters.language) {
    values.push(filters.language);
    conditions.push(`$${values.length} = ANY(languages)`);
  }

  const where = conditions.length ? `WHERE ${conditions.join(" AND ")}` : "";
  const { rows } = await pool.query<Course>(
    `SELECT ${SELECT_FIELDS} FROM courses ${where}`,
    values
  );
  return rows;
};

export const getCourseMeta = async (): Promise<CourseMeta> => {
  const [providers, skillLevels, topics, languages] = await Promise.all([
    pool.query<{ provider: string }>(
      "SELECT DISTINCT provider FROM courses ORDER BY provider"
    ),
    pool.query<{ skill_level: string }>(
      "SELECT DISTINCT skill_level FROM courses ORDER BY skill_level"
    ),
    pool.query<{ topic: string }>(
      "SELECT DISTINCT unnest(topics) AS topic FROM courses ORDER BY topic"
    ),
    pool.query<{ language: string }>(
      "SELECT DISTINCT unnest(languages) AS language FROM courses ORDER BY language"
    ),
  ]);
  return {
    providers: providers.rows.map((r) => r.provider),
    skillLevels: skillLevels.rows.map((r) => r.skill_level),
    topics: topics.rows.map((r) => r.topic),
    languages: languages.rows.map((r) => r.language),
  };
};

export const getCourseById = async (courseId: string): Promise<Course | null> => {
  const { rows } = await pool.query<Course>(
    `SELECT ${SELECT_FIELDS} FROM courses WHERE course_id = $1`,
    [courseId]
  );
  return rows[0] ?? null;
};
