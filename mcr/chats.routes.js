import express from "express";

import {
  getAllChats,
  getMyChats,
  postToChat,
  createChat,
} from "./chats.contr.js";

const router = express.Router();

//GET
router.get("/:id", getMyChats);
router.get("/", getAllChats);

//POST
router.post("/create", createChat);
router.post("/:id", postToChat);

export default router;
