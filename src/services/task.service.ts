import { taskRepository } from "../repositories/task.repository";
import type {
  CreateTaskInput,
  Task,
  UpdateTaskInput,
} from "../types/task.types";

export class TaskService {
  createTask(input: CreateTaskInput): Task {
    if (!input.title.trim()) {
      throw new Error("Task title cannot be empty.");
    }

    // TODO: Generate ID
    const tasks = taskRepository.getAll();

    const id =
      tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 1;

    // TODO: Create a new Task object
    const task: Task = {
      id,
      title: input.title,
      description: input.description,
      status: input.status,
      priority: input.priority,
      createdAt: new Date(),
      dueDate: input.dueDate,
      settings: input.settings,
    };

    // TODO: Save Task into Repository
    taskRepository.add(task);

    // TODO: Return the created Task
    return task;
  }

  // Get all tasks
  getAllTasks(): Task[] {
    return taskRepository.getAll();
  }

  // Get task by ID
  getTaskById(id: number): Task | undefined {
    return taskRepository.getById(id);
  }

  // Update task by ID
  updateTask(id: number, updatedTask: UpdateTaskInput): boolean {
    if (updatedTask.title !== undefined && !updatedTask.title.trim()) {
      throw new Error("Task title cannot be empty");
    }
    return taskRepository.update(id, updatedTask);
  }

  // Delete task by ID
  deleteTask(id: number): boolean {
    return taskRepository.delete(id);
  }
}
