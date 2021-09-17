import express from "express";

import { getMyChats, postToChat, createChat } from "./intercom.contr.js";
import verifyToken from "../util/verifyToken.js";

const router = express.Router();

router.get("/", verifyToken, getMyChats);
router.post("/", verifyToken, createChat);

router.post("/:id", verifyToken, postToChat);

export default router;
