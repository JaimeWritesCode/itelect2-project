import { formatDate, validateTask, mergeTaskUpdate} from './utils.js';

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
