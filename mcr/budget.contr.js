import express from "express";
import mongoose from "mongoose";

import Budget from "./budget.model.js";

const router = express.Router();

//FETCH_ALL
export const getBudgetPosts = async (req, res) => {
  try {
    const budgetPosts = await Budget.find();
    res.status(200).json(budgetPosts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
//CREATE_NEW
export const createBudgetPost = async (req, res) => {
  const budgetPost = req.body;

  const newBudgetPost = new Budget(budgetPost);

  try {
    await newBudgetPost.save();

    res.status(201).json(newBudgetPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
//DELETE
export const deleteBudgetPost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No budget post with id: ${id}`);

  await Budget.findByIdAndRemove(id);

  res.json({ message: "Budget post deleted successfully." });
};
//Update
export const updateBudgetPost = async (req, res) => {
  const { id } = req.params;
  const { title, category, value, note, person, createdAt } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No project with id: ${id}`);

  const updatedBudgetPost = {
    title,
    category,
    value,
    note,
    person,
    createdAt,
    _id: id,
  };
  await Gallery.findByIdAndUpdate(id, updatedBudgetPost, { new: true });

  res.json(updatedBudgetPost);
};

export default router;
