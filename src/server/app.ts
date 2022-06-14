import express, { Application, Request, Response, NextFunction } from "express";
import { router as userRoutes } from "./routes/user.routes";

const app: Application = express();

app.use("/users", userRoutes);

app.use("/test", (req: Request, res: Response): void => {
  const str_json = { response: "Test route works" };
  res.status(200).send(str_json);
});

app.use("/", (req: Request, res: Response, next: NextFunction): void => {
  if (req.originalUrl === "/") res.status(200).json({ response: "Home route" });
  else res.sendStatus(404);
});

export default app;
