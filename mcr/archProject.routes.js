import express from "express";

import {
  getArchProjects,
  getArchProject,
  createArchProject,
  updateArchProject,
  deleteArchProject,
} from "./archProject.contr.js";

const router = express.Router();

router.get("/", getArchProjects);
router.post("/", createArchProject);
router.get("/:id", getArchProject);
router.patch("/:id", updateArchProject);
router.delete("/:id", deleteArchProject);

export default router;
