import express from "express";
import decodeToken from "../util/decodeToken.js";

const router = express.Router();

import Chats from "./intercom.model.js";
const model = Chats;

export const getMyChats = async (req, res) => {
  //
  const token = req.header("auth-token");
  const { username } = decodeToken(token);

  try {
    const chats = await model.find({ users: { $elemMatch: { username: username } } });

    res.status(201).json(chats);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const createChat = async (req, res) => {
  //
  const data = req.body;
  const newChat = new model(data);

  try {
    await newChat.save();
    res.status(201).json(newChat);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const postToChat = async (req, res) => {
  //
  const id = req.params.id;
  const token = req.header("auth-token");
  const { username } = decodeToken(token);

  const newPost = {
    message: req.body.message,
    username: username,
  };

  if (!id) {
    res.status(408).json("id missing");
  }
  if (!req.body.message) {
    res.status(408).json("No message in body to submit");
  }

  try {
    await model.findByIdAndUpdate(id, {
      $push: { messages: newPost },
    });
    res.status(201).json("message succesfully added to chat");
  } catch (err) {
    res.status(409).json(message);
  }
};

export default router;
