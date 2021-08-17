import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

import Statistics from "./statistics.model.js";
const model = Statistics;

const router = express.Router();

export const getStatistics = async (req, res) => {
  const userBody = req.body;

  try {
    const payload = await model.find();

    res.status(200).json(payload);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
