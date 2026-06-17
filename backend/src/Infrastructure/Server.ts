import "dotenv/config";
import express from "express";
import cors from "cors";
import { MovementController } from "./Controllers/MovementController.js";

const app = express();
const movementController = new MovementController();

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

app.use(
  cors({
    origin: FRONTEND_URL,
  }),
);

app.get("/movements", movementController.getAll);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Art Movements API running on http://localhost:${PORT}`);
});
