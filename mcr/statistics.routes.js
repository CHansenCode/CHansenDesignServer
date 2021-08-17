import express from "express";

import { getStatistics } from "./statistics.contr.js";

const router = express.Router();

router.get("/", getStatistics);

export default router;
