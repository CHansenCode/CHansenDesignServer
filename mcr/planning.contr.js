import express from "express";
import mongoose from "mongoose";

import PlanningApp from "./planning.model.js";

const router = express.Router();

export const getPlannings = async (req, res) => {
  try {
    const plannings = await PlanningApp.find();
    res.status(200).json(plannings);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPlanning = async (req, res) => {
  const planning = req.body;
  const newPlanningEntry = new PlanningApp(planning);

  try {
    await newPlanningEntry.save();
    res.status(201).json("Planning entry created succesfully");
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePlanning = async (req, res) => {
  const { id } = req.params;
  const updatedPlanning = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No project with id: ${id}`);

  await PlanningApp.findByIdAndUpdate(id, updatedPlanning);

  res.json("Project succesfully updated");
};

export const deletePlanning = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No project with id: ${id}`);

  await PlanningApp.findByIdAndRemove(id);

  res.json("Project succesfully deleted");
};
