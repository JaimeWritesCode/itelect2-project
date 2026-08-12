export const formatDate = (date) => `Due: ${date.toLocaleDateString()}`;

export const validateTask = (task) => Boolean(task && task.title && String(task.title).trim() !== '');

export const mergeTaskUpdate = (original, ...updates) => ({
  ...original,
  ...updates.reduce((old, curr) => ({ ...old, ...curr }), {})
});

export class TaskValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "TaskValidationError";
  }
}

export function createTask(taskData) { 
  if (!validateTask(taskData)) { 
    throw new TaskValidationError("Invalid task data"); 
  }

  return {
    id: Date.now(),
    completed: false,
    ...taskData,
  };
}

export const tasks = [
  { id: 1, title: 'Task 1: Equipment Tracking Prototype', completed: false },
  { id: 2, title: 'Task 2: Beta Version', completed: true },
  { id: 3, title: 'Task 3: Usable product', completed: false }
];

export async function fetchSampleUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return users.slice(0, 5).map(({ id, name, email }) => ({ id, name, email }));
}