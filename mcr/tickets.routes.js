import express from "express";

import { getTickets, createTicket, updateTicket, deleteTicket, commentTicket } from "./tickets.contr.js";
import verifyToken from "../util/verifyToken.js";

const router = express.Router();

router.get("/", getTickets);
router.post("/", createTicket);
router.post("/:id", commentTicket);
router.patch("/:id", updateTicket);
router.delete("/:id", deleteTicket);

export default router;
