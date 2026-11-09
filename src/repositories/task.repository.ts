import type { Task } from "../types/task.types";
import { Repository } from "./repository";

export const taskRepository = new Repository<Task>();
