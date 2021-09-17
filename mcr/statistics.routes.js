import express from "express";

import { getStatistics, initStatistics, counter } from "./statistics.contr.js";

const router = express.Router();

router.get("/", getStatistics);
router.post("/init", initStatistics);
router.post("/counter", counter);

export default router;
