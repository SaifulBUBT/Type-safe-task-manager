// Generic DOM helper function
function getElement<T extends HTMLElement>(id: string): T {
  const element = document.getElementById(id);

  if (!element) {
    throw new Error(`Element with id "${id}" not found`);
  }

  return element as T;
}

// To select HTML elements
export const taskForm = getElement<HTMLFormElement>("task-form");
export const taskTitleInput = getElement<HTMLInputElement>("task-title");
export const taskDescriptionInput = getElement<HTMLTextAreaElement>("task-description");
export const taskStatusSelect = getElement<HTMLSelectElement>("task-status");
export const taskPrioritySelect = getElement<HTMLSelectElement>("task-priority");
export const taskDueDateInput = getElement<HTMLInputElement>("task-due-date");  
export const taskList = getElement<HTMLUListElement>("task-list");