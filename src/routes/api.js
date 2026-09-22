import express from 'express';
import db from '../../models/index.cjs';
import verifyToken from '../middleware/verifyToken.js';
import requireRole from '../middleware/requireRole.js';

const { Task, User } = db;
const router = express.Router();

router.get('/users', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'name', 'email'],
      order: [['id', 'ASC']],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});


router.get('/tasks', async (req, res, next) => {
  try {
    const tasks = await Task.findAll({
      include: User,
      order: [['id', 'ASC']],
    });
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});


router.get('/tasks/:id', async (req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.id, { include: User });
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) {
    next(err);
  }
});


router.post('/tasks', verifyToken, async (req, res, next) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.put('/tasks/:id', verifyToken, async (req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    await task.update(req.body);
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE  admin only
router.delete('/tasks/:id', verifyToken, requireRole('admin'), async (req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    await task.destroy();
    res.json({ message: 'Deleted', task });
  } catch (err) {
    next(err);
  }
});

export default router;