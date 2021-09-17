import express from "express";

import { loginUser } from "./auth.contr.js";

const router = express.Router();

router.post("/", loginUser);

export default router;
