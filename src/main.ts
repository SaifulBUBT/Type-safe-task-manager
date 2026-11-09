console.log("Hello, TypeScript!");

import { taskRepository } from "./repositories/task.repository";

// Example usage
taskRepository.add({
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
});

taskRepository.add({
  id: 2,
  title: "Build a project",
  description: "Create a TypeScript project using Generics",
  status: "in-progress",
  priority: "medium",
  createdAt: new Date(),
  dueDate: new Date("2026-12-01"),
  settings: {
    reminder: false,
    color: "green",
  },
});

console.log("All tasks:", taskRepository.getAll());

console.log("Task with ID:", taskRepository.getById(1));

taskRepository.update(1, { status: "in-progress" });
