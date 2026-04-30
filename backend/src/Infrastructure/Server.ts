import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { MovementController } from './Controllers/MovementController.js';

const app = express();
const movementController = new MovementController();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/movements', movementController.getAll);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Art Movements API running on http://localhost:${PORT}`);
});