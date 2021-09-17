import express from "express";

import {
  getTexts,
  createText,
  getText,
  updateText,
  deleteText,
  createNewPage,
  createNewParagraph,
  deleteParagraph,
} from "./text.contr.js";
import verifyToken from "../util/verifyToken.js";

const router = express.Router();

router.get("/", getTexts);
router.post("/", verifyToken, createText);
router.get("/:id", verifyToken, getText);
router.patch("/:id", verifyToken, updateText);
router.delete("/:id", verifyToken, deleteText);

router.post("/page", createNewPage);
router.post("/page/:id", createNewParagraph);
router.delete("/page/:id/:paraid", deleteParagraph);

export default router;
