import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import historyRoutes from "./routes/historyRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Mongo connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Mongo Error:", err));

// Routes
app.use("/api/history", historyRoutes);

// Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
