// Render tasks in the DOM

import { taskList } from "./task.dom";
import type { Task } from "../types/task.types";

export function renderTasks(tasks: Task[]): void {
    //1. Clear the existing task list
    taskList.replaceChildren();

    //2. Loop through the tasks and create list items for each task
    tasks.forEach((task) => {
        const li = document.createElement("li");
        const title = document.createElement("h3");
        title.textContent = task.title;
        li.appendChild(title);

        // create a paragraph for the description if it exists
        if (task.description) {
            const description = document.createElement("p");
            description.textContent = task.description;
            li.appendChild(description);
        }
        const priority = document.createElement("span");
        priority.textContent = `Priority: ${task.priority}`;

        const status = document.createElement("span");
        status.textContent = `Status: ${task.status}`;

        // Append elements to li
        li.appendChild(priority);
        li.appendChild(status);

        // Append li to the task list
        taskList.appendChild(li);
    });
}