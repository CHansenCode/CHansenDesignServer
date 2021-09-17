import express from "express";

import { getContactMessages, createContactMessage, deleteContactMessage } from "./contact.contr.js";
import verifyToken from "../util/verifyToken.js";

const router = express.Router();

router.get("/", verifyToken, getContactMessages);
router.post("/", createContactMessage);
router.delete("/:id", verifyToken, deleteContactMessage);

export default router;
