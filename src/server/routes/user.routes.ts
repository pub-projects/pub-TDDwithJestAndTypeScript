import { Router, Request, Response } from "express";

const router = Router();

router.get("/test", (req: Request, res: Response): void => {
  const str_json = { response: "Test route works" };
  res.status(200).send(str_json);
});

router.get("/users", (req: Request, res: Response): void => {
  const users = ["Chris", "John", "Joe"];
  res.status(200).send(users);
});

router.get("/", (req: Request, res: Response): void => {
  res.status(200).send({ response: "Home route" });
});

router.get("*", (req: Request, res: Response): void => {
  res.sendStatus(404); //  .status(404).send({ response: "Fallback route" });
});

export { router };
