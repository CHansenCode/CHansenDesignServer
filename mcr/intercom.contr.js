import express from "express";

//init
const router = express.Router();

//MODEL
import Chats from "./intercom.model.js";
const model = Chats;

//FETCH
export const getMyChats = async (req, res) => {
  const usernameObj = req.body;
  const userString = usernameObj.username;

  if (!userString) {
    res.status(201).json("Invalid data");
  } else {
    const chats = await model.find({ users: { $elemMatch: usernameObj } });
    try {
      res.status(201).json(chats);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }
};

export const getChatById = async (req, res) => {
  const { id } = req.params;

  try {
    const chat = await model.findById(id);
    res.status(200).json(chat);
  } catch (error) {
    res.status(404).json(error);
  }
};

//POST
export const createChat = async (req, res) => {
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
  const message = req.body.message;
  const id = req.params.id;

  if (!id) {
    res.status(408).json("id missing");
  }

  if (!message) {
    res.status(401).json("no message body found");
  }

  try {
    await model.findByIdAndUpdate(id, {
      $push: { messages: message },
    });
    res.status(201).json(message);
  } catch (err) {
    res.status(409).json(message);
  }
};

export default router;
