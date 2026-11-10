console.log("Hello, TypeScript!");

import { TaskService } from "./services/task.service";

const taskService = new TaskService();

// Create a new task
taskService.createTask({
  title: "Learn TypeScript",
  description: "Practice TypeScript Generics",
  status: "todo",
  priority: "high",
  dueDate: new Date("2026-11-15"),
  settings: {
    reminder: true,
    color: "blue",
  },
});
taskService.createTask({
  title: "Learn React",
  description: "Practice React with TypeScript",
  status: "todo",
  priority: "medium",
  dueDate: new Date("2026-11-20"),
  settings: {
    reminder: false,
    color: "green",
  },
});

console.log("All tasks:", taskService.getAllTasks());

console.log("Task with ID:", taskService.getTaskById(1));

taskService.updateTask(1, { status: "in-progress", priority: "medium" });

console.log(" task with ID :", taskService.getTaskById(2));

console.log("All tasks:", taskService.getAllTasks());

taskService.deleteTask(1);

console.log("All tasks after deletion:", taskService.getAllTasks());
