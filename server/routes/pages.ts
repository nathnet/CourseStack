import { Router, Request, Response } from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname: string = dirname(fileURLToPath(import.meta.url));
const router: Router = Router();
const publicDir: string = join(__dirname, "..", "public");

router.get("/", (_req: Request, res: Response) => {
  res.sendFile(join(publicDir, "index.html"));
});

router.get("/courses/:courseId", (_req: Request, res: Response) => {
  res.sendFile(join(publicDir, "detail.html"));
});

export default router;
