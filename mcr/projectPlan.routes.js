import express from "express";

import {
  getProjectPlans,
  getProjectPlan,
  createProjectPlan,
  updateProjectPlan,
  deleteProjectPlan,
} from "./projectPlan.contr.js";

const router = express.Router();

router.get("/", getProjectPlans);
router.post("/", createProjectPlan);
router.get("/:id", getProjectPlan);
router.patch("/:id", updateProjectPlan);
router.delete("/:id", deleteProjectPlan);

export default router;
