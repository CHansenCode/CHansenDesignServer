import express from "express";

import {
  getContactMessages,
  createContactMessage,
  deleteContactMessage,
} from "./contactForm.contr.js";

const router = express.Router();

router.get("/", getContactMessages);
router.post("/", createContactMessage);
router.delete("/:id", deleteContactMessage);

export default router;
