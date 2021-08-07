import express from "express";

import verifyToken from "../util/verifyToken.js";

import { getAll, getOneById, createPost, updateOneByID, deleteOneByID } from "./text.contr.js";

const router = express.Router();

router.get("/", getAll);
router.post("/", createPost);
router.get("/:id", getOneById);
router.patch("/:id", updateOneByID);
router.delete("/:id", deleteOneByID);

export default router;
