import { fetchSampleUsers } from './api.js';
import { formatDate, validateTask, mergeTaskUpdate, createTask, TaskValidationError } from './utils.js';
console.log('Server starting...');

const formattedDate = formatDate(new Date("2026-07-22"));
console.log('formatDate:', formattedDate);

const validCheck = validateTask('Valid: $("Project Title")');
console.log(validCheck);

const origTask = { title: "Task 1" };
console.log(origTask)
const updatedTask = { title: "Task 1 (Updated)" };
const uptResult = mergeTaskUpdate(origTask, updatedTask);
console.log(uptResult);

async function runThis() {
  try {
    console.log("Fetching users:");
    const users = await fetchSampleUsers();
    console.log("Users Fetched:", users);

    console.log("Creating task:");
    const sampleTask = {
      title: "Inspect LGU Asset Inventory",
      dueDate: new Date("2026-08-01"),
    };

    const createdTask = createTask(sampleTask);
    console.log("Task has been successfully created:", createdTask, sampleTask);

  } catch (error) {
    if (error instanceof TaskValidationError) {
      console.error("Task Validation Error:", error.message);
    } else {
      console.error("An unexpected error occurred:", error);
    }
  }
}

runThis();