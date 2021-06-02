import express from "express";
import mongoose from "mongoose";

import ArchProject from "./archProject.model.js";

const router = express.Router();

export const getArchProjects = async (req, res) => {
  try {
    const archProjects = await ArchProject.find();
    res.status(200).json(archProjects);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getArchProject = async (req, res) => {
  const { id } = req.params;

  try {
    const archProject = await ArchProject.findById(id);

    res.status(200).json(archProject);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createArchProject = async (req, res) => {
  const proj = req.body;

  const newProject = new ArchProject(proj);

  try {
    await newProject.save();

    res.status(201).json(newProject);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateArchProject = async (req, res) => {
  const { id } = req.params;
  const { title, subtitle, tags, heroImage, galleryThumbnail, description } =
    req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No project with id: ${id}`);

  const updatedProject = {
    title,
    subtitle,
    tags,
    heroImage,
    galleryThumbnail,
    description,
    _id: id,
  };

  await ArchProject.findByIdAndUpdate(id, updatedProject, { new: true });

  res.json(updatedProject);
};

export const deleteArchProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await archProject.findByIdAndRemove(id);

  res.json({ message: "Project deleted successfully." });
};

export default router;
