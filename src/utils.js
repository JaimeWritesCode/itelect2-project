export const formatDate = (date) => `Due: ${date.toLocaleDateString()}`;
export const validateTask = ({ title, dueDate } = {}) => Boolean(title && dueDate);
export const mergeTaskUpdate = (original, ...updates) => ({
  ...original,
  ...updates.reduce((old, curr) => ({ ...old, ...curr }), {})
});

export class TaskValidationError extends Error{
  constructor(message){
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

// Mock tasks array required for GET /api/tasks
export const tasks = [
  { id: 1, title: 'Task 1: Equipment Tracking Prototype', completed: false },
  { id: 2, title: 'Task 2: Beta Version', completed: true },
  { id: 3, title: 'Task 3: Usable product', completed: false }
];

// Async user fetching function required for GET /api/users
export async function fetchSampleUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return users.slice(0, 5).map(({ id, name, email }) => ({ id, name, email }));
}

