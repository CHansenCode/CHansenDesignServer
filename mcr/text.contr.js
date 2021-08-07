import express from "express";
import mongoose from "mongoose";

const router = express.Router();

import Text from "./text.model.js";

const model = Text;

export const getAll = async (req, res) => {
  try {
    const posts = await model.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getOneById = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await model.findById(id);

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new model(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json(error.message);
  }
};
export const updateOneByID = async (req, res) => {
  const { id } = req.params;
  const updatedPost = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No mediaPost with id: ${id}`);

  await model.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(`post ${id} updated succesfully`);
};
export const deleteOneByID = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  await model.findByIdAndRemove(id);

  res.json({ message: "Message deleted successfully." });
};

export default router;
