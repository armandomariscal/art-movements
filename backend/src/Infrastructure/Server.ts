import 'dotenv/config';
import express from 'express';
import { MovementController } from './Controllers/MovementController.js';

const app = express();
const movementController = new MovementController();

app.get('/movements', movementController.getAll);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Art Movements API running on http://localhost:${PORT}`);
});