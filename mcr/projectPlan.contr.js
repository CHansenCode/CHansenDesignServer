import express from "express";
import mongoose from "mongoose";

import ProjectPlan from "./projectPlan.model.js";

const router = express.Router();

export const getProjectPlans = async (req, res) => {
  try {
    const projetPlan = await ProjectPlan.find();
    res.status(200).json(projetPlan);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getProjectPlan = async (req, res) => {
  const { id } = req.params;

  try {
    const projectPlan = await ProjectPlan.findById(id);

    res.status(200).json(projectPlan);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProjectPlan = async (req, res) => {
  const post = req.body;

  const newProjectPlan = new ProjectPlan(post);

  try {
    await newProjectPlan.save();

    res.status(201).json(newProjectPlan);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateProjectPlan = async (req, res) => {
  const { id } = req.params;
  const { title, subtitle, tags, heroImage, galleryThumbnail, description } =
    req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No project with id: ${id}`);

  const updatedProjectPlan = {
    title,
    subtitle,
    alt,
    category,
    project,
    description,
    url,
    thumbnail,
    createdAt,
    _id: id,
  };

  await ProjectPlan.findByIdAndUpdate(id, updatedProjectPlan, { new: true });

  res.json(updatedProjectPlan);
};

export const deleteProjectPlan = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await ProjectPlan.findByIdAndRemove(id);

  res.json({ message: "Project plan deleted succesfully." });
};

export default router;
