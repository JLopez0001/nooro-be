import express from "express";
import * as taskController from "../controllers/tasks";

const router = express.Router();

router.get("/", taskController.getAllTasks);
export default router;
