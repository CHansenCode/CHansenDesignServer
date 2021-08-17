import express from "express";

import { getMyChats, postToChat, createChat } from "./intercom.contr.js";

const router = express.Router();

//GET
router.post("/", getMyChats);

//POST
router.post("/create", createChat);
router.post("/:id", postToChat);

export default router;
