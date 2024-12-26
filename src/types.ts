import { TaskColor } from "@prisma/client";

export interface CreateTaskDto {
  title: string;
  color: TaskColor;
  completed: boolean;
}

export interface UpdateTaskDto {
  title?: string;
  color?: TaskColor;
  completed?: boolean;
}
