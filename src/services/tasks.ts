import { PrismaClient, Task } from "@prisma/client";
import { CreateTaskDto, UpdateTaskDto } from "src/types";

const prisma = new PrismaClient();

export const getTasks = async (): Promise<Task[]> => {
  return await prisma.task.findMany();
};
