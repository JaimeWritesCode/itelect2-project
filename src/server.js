// src/server.js
import express from 'express';
import router from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Mount router under /api
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});