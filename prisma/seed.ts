import { PrismaClient, TaskColor } from "@prisma/client";
import { CreateTaskDto } from "../src/types";

const prisma = new PrismaClient();

const taskData: CreateTaskDto[] = [
  {
    title: "Integer urna interdum massa libero auctor neque",
    color: TaskColor.PURPLE,
    completed: true,
  },
  {
    title: "Integer urna interdum massa libero auctor neque",
    color: TaskColor.PURPLE,
    completed: true,
  },
  {
    title: "Integer urna interdum massa libero auctor neque",
    color: TaskColor.BLUE,
    completed: false,
  },
  {
    title: "Integer urna interdum massa libero auctor neque",
    color: TaskColor.BLUE,
    completed: false,
  },
  {
    title: "Integer urna interdum massa libero auctor neque",
    color: TaskColor.BLUE,
    completed: false,
  },
];

async function main() {
  console.log("Seeding tasks...");

  for (const task of taskData) {
    await prisma.task.create({
      data: task,
    });
  }

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
