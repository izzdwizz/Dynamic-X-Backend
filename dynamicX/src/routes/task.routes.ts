import { Router } from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from "../controllers/task.controllers";

const taskRouter = (router: Router) => {
  // router.post("/create", createTask);
  router.get("/getTask", getAllTasks);
  router.put("/:id", updateTask);
  router.delete("/:id", deleteTask);
};

export default taskRouter;
