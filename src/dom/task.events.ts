// Handle task events(click, submit, etc.)

import { TaskService } from "../services/task.service";
import type { CreateTaskInput } from "../types/task.types";

import {
  taskForm,
  taskTitleInput,
  taskDescriptionInput,
  taskStatusSelect,
  taskPrioritySelect,
  taskDueDateInput,
} from "./task.dom";

import { renderTasks } from "./task.render";

// Create TaskService instance
const taskService = new TaskService();

// Initialize task events
export function initializeTaskEvents(): void {
  // Listen for form submit
  taskForm.addEventListener("submit", handleTaskSubmit);

  // Render existing tasks
  renderTasks(taskService.getAllTasks());
}

// Handle form submission
function handleTaskSubmit(event: SubmitEvent): void {
  event.preventDefault();

  try {
    // 1. Collect form data
    const taskInput: CreateTaskInput = {
      title: taskTitleInput.value.trim(),

      description: taskDescriptionInput.value.trim(),

      status: taskStatusSelect.value as CreateTaskInput["status"],

      priority: taskPrioritySelect.value as CreateTaskInput["priority"],

      dueDate: taskDueDateInput.value
        ? new Date(taskDueDateInput.value)
        : undefined,

      settings: {
        reminder: false,
        color: "blue",
      },
    };

    // 2. Create new task
    taskService.createTask(taskInput);

    // 3. Refresh task list
    renderTasks(taskService.getAllTasks());

    // 4. Reset form
    taskForm.reset();

  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
    } else {
      alert("Something went wrong!");
    }
  }
}
