import { Router } from "express";
import authRouter from "./auth.routes";
import taskRouter from "./task.routes";

const router = Router();

export default (): Router => {
  authRouter(router);
  taskRouter(router);
  return router;
};
