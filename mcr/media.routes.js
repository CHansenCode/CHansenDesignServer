import express from "express";

import { getGallery, getGalleryPost, createGalleryPost, updateGalleryPost, deleteGalleryPost } from "./media.contr.js";

const router = express.Router();

router.get("/", getGallery);
router.post("/", createGalleryPost);
router.get("/:id", getGalleryPost);
router.patch("/:id", updateGalleryPost);
router.delete("/:id", deleteGalleryPost);

export default router;
