import express, { Express, Request, Response } from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import coursesRouter from "./routes/courses.js";
import pagesRouter from "./routes/pages.js";

const __dirname: string = dirname(fileURLToPath(import.meta.url));
const app: Express = express();
const PORT: number | string = process.env.PORT ?? 3000;

app.use(express.static(join(__dirname, "public")));
app.use("/", pagesRouter);

app.use("/", coursesRouter);

app.all("*catchall", (_req: Request, res: Response) => {
  res.status(404).sendFile(join(__dirname, "public", "404.html"));
});

app.listen(PORT, () => {
  console.log(`CourseStack running at http://localhost:${PORT}`);
});
