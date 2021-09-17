import express from "express";

import { getMedia, getMediaPost, createMediaPost, updateMediaPost, deleteMediaPost } from "./media.contr.js";
import verifyToken from "../util/verifyToken.js";

const router = express.Router();

router.get("/", getMedia);
router.post("/", verifyToken, createMediaPost);
router.get("/:id", verifyToken, getMediaPost);
router.patch("/:id", verifyToken, updateMediaPost);
router.delete("/:id", verifyToken, deleteMediaPost);

export default router;
