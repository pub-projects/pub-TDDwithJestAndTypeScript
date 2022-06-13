import express, { Application, Request, Response, NextFunction } from "express";
import { router as userRoutes } from "./routes/user.routes";

const app: Application = express();

app.use("/", userRoutes);
// app.use("/", (req: Request, res: Response, next: NextFunction): void => {
//   res.json({ message: "Catching all routes." });
// });

export default app;
