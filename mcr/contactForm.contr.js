import express from "express";
import mongoose from "mongoose";

import ContactForm from "./contactForm.model.js";

const router = express.Router();

//FETCH_ALL
export const getContactMessages = async (req, res) => {
  try {
    const ContactForms = await ContactForm.find();
    res.status(200).json(ContactForms);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//CREATE_NEW/POST
export const createContactMessage = async (req, res) => {
  const contactMessage = req.body;

  const newContactForm = new ContactForm(contactMessage);

  try {
    await newContactForm.save();

    res.status(201).json(newContactForm);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteContactMessage = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await contactMessage.findByIdAndRemove(id);

  res.json({ message: "Project deleted successfully." });
};

export default router;
