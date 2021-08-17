import express from "express";

import { authUser } from "./auth.contr.js";

const router = express.Router();

router.post("/", authUser);

export default router;
