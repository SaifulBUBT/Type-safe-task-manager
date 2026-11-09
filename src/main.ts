console.log("Hello, TypeScript!");
import type { Task } from "./types/task.types";

const task: Task = {
  id: 1,
  title: "Learn TypeScript",
  description: "Practice TypeScript Generics",
  status: "todo",
  priority: "high",
  createdAt: new Date(),
  dueDate: new Date("2026-11-15"),
  settings: {
    reminder: true,
    color: "blue",
  },
};

console.log(task);
