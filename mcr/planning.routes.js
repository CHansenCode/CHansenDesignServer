import express from "express";

import { getPlannings, updatePlanning, deletePlanning, createPlanning } from "./planning.contr.js";

const router = express.Router();

router.get("/", getPlannings);
router.post("/", createPlanning);
router.patch("/:id", updatePlanning);
router.delete("/:id", deletePlanning);

export default router;
