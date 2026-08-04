// src/routes/index.js
import express from 'express';
import { tasks, fetchSampleUsers } from '../utils.js';

const router = express.Router();

let cachedUsers = [];

// Pre-fetch and cache sample users once on server startup
(async () => {
  try {
    cachedUsers = await fetchSampleUsers();
    console.log("Sample users cached successfully.");
  } catch (err) {
    console.error("Error fetching sample users:", err.message);
  }
})();

// Route 1: GET /api/tasks
router.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Route 2: GET /api/tasks/:id
router.get('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id, 10);
  const task = tasks.find((t) => t.id === taskId);

  if (!task) {
    return res.status(404).json({ error: `Task with id ${taskId} not found` });
  }

  res.json(task);
});

// Route 3: GET /api/users
router.get('/users', (req, res) => {
  res.json(cachedUsers);
});

export default router;