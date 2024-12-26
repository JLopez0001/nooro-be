import express from "express";
import * as taskController from "../controllers/tasks";

const router = express.Router();

router.get("/", taskController.getAllTasks);
router.post("/", taskController.createTask);
router.put("/:id", taskController.updateTask);
export default router;
