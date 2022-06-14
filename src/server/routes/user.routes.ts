import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response): void => {
  const users = ["Chris", "John", "Joe"];
  res.status(200).send(users);
});

export { router };
