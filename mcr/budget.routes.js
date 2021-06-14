import express from "express";

import {
  getBudgetPosts,
  createBudgetPost,
  getBudgetPost,
  updateBudgetPost,
  deleteBudgetPost,
} from "./budget.contr.js";

const router = express.Router();

router.get("/", getBudgetPosts);
router.post("/", createBudgetPost);
router.get("/:id", getBudgetPost);
router.patch("/:id", updateBudgetPost);
router.delete("/:id", deleteBudgetPost);

export default router;
