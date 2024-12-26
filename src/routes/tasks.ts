import express from "express";
import * as taskController from "../controllers/tasks";

const router = express.Router();

router.get("/", taskController.getAllTasks);
router.post("/", taskController.createTask);
export default router;
