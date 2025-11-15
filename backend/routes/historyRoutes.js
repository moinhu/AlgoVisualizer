import express from "express";
import { saveHistory, getHistory } from "../controllers/historyController.js";

const router = express.Router();

router.post("/", saveHistory);
router.get("/", getHistory);

export default router;
