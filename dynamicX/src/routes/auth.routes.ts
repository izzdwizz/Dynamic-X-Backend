import { Router } from "express";

import { login, register } from "../controllers/auth.controller";
import { createTask } from "../controllers/task.controllers";

const authRouter = (router: Router) => {
  router.post("/register", register);
  router.post("/create", createTask);
  router.post("/login", login);
};

export default authRouter;
