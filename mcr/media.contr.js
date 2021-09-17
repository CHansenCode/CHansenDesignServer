import express from "express";
import mongoose from "mongoose";

import Media from "./media.model.js";
const model = Media;
import { mediaValidation } from "./media.valid.js";

const router = express.Router();

export const getMedia = async (req, res) => {
  try {
    const resData = await model.find();
    res.status(200).json(resData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getMediaPost = async (req, res) => {
  const { id } = req.params;

  try {
    const resData = await model.findById(id);

    res.status(200).json(resData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createMediaPost = async (req, res) => {
  const data = req.body;
  const newPost = new model(data);

  try {
    await mediaValidation.validateAsync(data);
  } catch (error) {
    return res.status(400).send(error.details[0].message);
  }

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateMediaPost = async (req, res) => {
  const { id } = req.params;
  const reqData = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  try {
    await model.findByIdAndUpdate(id, reqData, { new: true });

    res.json(reqData);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteMediaPost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  await model.findByIdAndRemove(id);

  res.json({ message: "Project deleted successfully." });
};

export default router;
