import { Router } from 'express';
import { validateTask, mergeTaskUpdate } from '../utils.js';

const router = Router();

let tasks = [
  { id: 1, title: 'Complete GT5', completed: true },
  { id: 2, title: 'Complete GT6', completed: false }
];
let nextTaskId = 3;

router.get('/tasks', (req, res) => {
  res.status(200).json(tasks);
});

router.get('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    return res.status(400).json({ error: 'Invalid task ID' });
  }

  const task = tasks.find((t) => t.id === id);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  res.status(200).json(task);
});

router.post('/tasks', (req, res) => {
  if (!validateTask(req.body)) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const newTask = {
    id: nextTaskId++,
    title: req.body.title,
    completed: req.body.completed ?? false
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

router.put('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    return res.status(400).json({ error: 'Invalid task ID' });
  }

  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks[index] = mergeTaskUpdate(tasks[index], req.body);
  res.status(200).json(tasks[index]);
});

router.delete('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    return res.status(400).json({ error: 'Invalid task ID' });
  }

  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  const [deletedTask] = tasks.splice(index, 1);
  res.status(200).json({ message: 'Task deleted successfully', task: deletedTask });
});

export default router;