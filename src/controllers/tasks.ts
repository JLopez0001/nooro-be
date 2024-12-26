import { Request, Response } from "express";
import * as taskService from "../services/tasks";

export const getAllTasks = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const tasks = await taskService.getTasks();
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
};

export const createTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { title, color, completed } = req.body;

  try {
    const newTask = await taskService.createTask({ title, color, completed });
    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create task" });
  }
};

export const updateTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { title, color, completed } = req.body;

  try {
    const updatedTask = await taskService.updateTask(Number(id), {
      title,
      color,
      completed,
    });

    if (!updatedTask) {
      res.status(404).json({ error: "Task not found" });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update task" });
  }
};

export const deleteTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const deletedTask = await taskService.deleteTask(Number(id));

    if (!deletedTask) {
      res.status(404).json({ error: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete task" });
  }
};
