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

