import express from "express";
import mongoose from "mongoose";

import Gallery from "./gallery.model.js";

const router = express.Router();

export const getGallery = async (req, res) => {
  try {
    const gallery = await Gallery.find();
    res.status(200).json(gallery);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getGalleryPost = async (req, res) => {
  const { id } = req.params;

  try {
    const galleryPost = await Gallery.findById(id);

    res.status(200).json(galleryPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createGalleryPost = async (req, res) => {
  const post = req.body;

  const newGalleryPost = new Gallery(post);

  try {
    await newGalleryPost.save();

    res.status(201).json(newGalleryPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateGalleryPost = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    subtitle,
    description,
    scale,
    northRotation,
    alt,
    category,
    project,
    stage,
    stageType,
    drawingType,
    tags,
    fileName,
    url,
    thumbnail,
    createdAt,
    createdBy,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No project with id: ${id}`);

  const updatedProject = {
    title,
    subtitle,
    description,
    scale,
    northRotation,
    alt,
    category,
    project,
    stage,
    stageType,
    drawingType,
    tags,
    fileName,
    url,
    thumbnail,
    createdAt,
    createdBy,
    _id: id,
  };

  await Gallery.findByIdAndUpdate(id, updatedProject, { new: true });

  res.json(updatedProject);
};

export const deleteGalleryPost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await Gallery.findByIdAndRemove(id);

  res.json({ message: "Project deleted successfully." });
};

export default router;
