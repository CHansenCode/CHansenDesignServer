import express from "express";
import mongoose from "mongoose";

import Tickets from "./tickets.model.js";
const model = Tickets;
import { ticketValidation } from "./ticket.valid.js";

const router = express.Router();

export const getTickets = async (req, res) => {
  try {
    const tickets = await model.find();

    res.status(200).json(tickets);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTicket = async (req, res) => {
  const body = req.body;
  const newPost = new model(body);

  try {
    await ticketValidation.validateAsync(body);
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

export const updateTicket = async (req, res) => {
  const { id } = req.params;
  const reqData = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No ticket with id: ${id}`);

  await model.findByIdAndUpdate(id, reqData);

  res.json(reqData);
};

export const deleteTicket = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  await model.findByIdAndRemove(id);

  res.json(id);
};

export const commentTicket = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  await model.findByIdAndUpdate(
    { _id: id },
    {
      $push: {
        comments: {
          user: body.user,
          body: body.body,
        },
      },
    }
  );
  res.json({ message: "Comment succesfully added" });
};

export default router;
