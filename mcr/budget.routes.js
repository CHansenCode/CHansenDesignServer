import express from "express";

import {
  getBudgetPosts,
  createBudgetPost,
  updateBudgetPost,
  deleteBudgetPost,
} from "./budget.contr.js";

const router = express.Router();

router.get("/", getBudgetPosts);
router.post("/", createBudgetPost);
router.patch("/:id", updateBudgetPost);
router.delete("/:id", deleteBudgetPost);

export default router;
