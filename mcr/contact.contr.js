import express from "express";
import mongoose from "mongoose";

import ContactForm from "./contact.model.js";
const model = ContactForm;
import { messageValidation } from "./contact.valid.js";

const router = express.Router();

//FETCH_ALL
export const getContactMessages = async (req, res) => {
  try {
    const tickets = await model.find();

    res.status(200).json(tickets);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//CREATE_NEW/POST
export const createContactMessage = async (req, res) => {
  const body = req.body;
  const newPost = new model(body);

  try {
    await messageValidation.validateAsync(body);
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

export const deleteContactMessage = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  await model.findByIdAndRemove(id);

  res.json({ message: "Message deleted successfully" });
};

export default router;
