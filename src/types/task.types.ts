type TaskStatus = "todo" | "in-progress" | "completed";

type TaskPriority = "low" | "medium" | "high";

interface TaskSettings {
  reminder: boolean;
  color: "blue" | "green" | "red";
}

export interface Task {
  id: number;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  createdAt: Date;
  dueDate?: Date;
  settings: TaskSettings;
}
