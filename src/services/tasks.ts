import { PrismaClient, Task } from "@prisma/client";
import { CreateTaskDto, UpdateTaskDto } from "src/types";

const prisma = new PrismaClient();

export const getTasks = async (): Promise<Task[]> => {
  return await prisma.task.findMany();
};

export const createTask = async (data: CreateTaskDto): Promise<Task> => {
  const task = await prisma.task.create({
    data: {
      title: data.title,
      color: data.color,
      completed: data.completed,
    },
  });
  return task;
};

export const updateTask = async (
  id: number,
  data: UpdateTaskDto
): Promise<Task> => {
  const task = await prisma.task.findUnique({ where: { id } });

  if (!task) {
    throw new Error("Task not found");
  }

  const updatedTask = await prisma.task.update({
    where: { id },
    data,
  });

  return updatedTask;
};
