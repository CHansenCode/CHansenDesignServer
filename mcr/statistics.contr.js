import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

import Statistics from "./statistics.model.js";
const model = Statistics;

const router = express.Router();

export const getStatistics = async (req, res) => {
  try {
    const payload = await model.find();

    res.status(200).json(payload);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const initStatistics = async (req, res) => {
  const dummyData = {
    pageLoads: 0,
    frontPage: {
      clickedOn: 0,
      bottomOfPage: 0,
    },
    pageOne: {
      clickedOn: 0,
      bottomOfPage: 0,
    },
    contactPage: {
      clickedOn: 0,
      bottomOfPage: 0,
    },
    aboutPage: {
      clickedOn: 0,
      bottomOfPage: 0,
    },
  };
  const initialData = new model(dummyData);

  try {
    await initialData.save();

    res.status(201).json("Statistics data succesfully initiated!");
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const counter = async (req, res) => {
  //
  const pageKey = req.body.pageKey;
  const key = req.body.key;

  try {
    const data = await model.find();

    res.status(200).json(newData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
