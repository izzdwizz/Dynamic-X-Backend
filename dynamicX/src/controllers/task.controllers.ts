import { Task } from "../entity/Task";
import { AppDataSource } from "../data-source";

async function getAllTasks(req: any, res: any) {
  try {
    const tasks = await AppDataSource.getRepository(Task).find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Error fetching tasks" });
  }
}

async function createTask(req: any, res: any) {
  const { title, description } = req.body;
  try {
    const newTask = new Task();
    newTask.title = title;
    newTask.description = description;
    await AppDataSource.getRepository(Task).save(newTask);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: "Error creating task" });
  }
}

async function updateTask(req: any, res: any) {
  const { id } = req.params;
  const { title, description, status } = req.body;

  try {
    const taskRepo = AppDataSource.getRepository(Task);
    const task = await taskRepo.findOneBy({ id });

    if (!task) return res.status(404).json({ error: "Task not found" });

    task.title = title ?? task.title;
    task.description = description ?? task.description;
    if (status) {
      task.isCompleted = status ?? task.isCompleted;
    }

    await taskRepo.save(task);
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: "Error updating task" });
  }
}

async function deleteTask(req: any, res: any) {
  const { id } = req.params;

  try {
    const taskRepo = AppDataSource.getRepository(Task);
    const task = await taskRepo.findOneBy({ id });

    if (!task) return res.status(404).json({ error: "Task not found" });

    await taskRepo.remove(task);
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting task" });
  }
}

export { getAllTasks, createTask, updateTask, deleteTask };
