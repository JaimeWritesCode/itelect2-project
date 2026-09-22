import express from 'express';
import apiRouter from './api.js';
import authRouter from './auth.js';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/', apiRouter);

export default router;