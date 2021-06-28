import express from "express";

//init
const router = express.Router();

//MODEL
import Chats from "./chats.model.js";
const model = Chats;

//FETCH
export const getAllChats = async (req, res) => {
  const posts = await model.find();
  try {
    res.status(201).json(posts);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
export const getMyChats = async (req, res) => {
  const usersArray = req.body.users;

  const chats = await model.find({ users: { $all: usersArray } });

  try {
    res.status(201).json(chats);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

//POST
export const postToChat = async (req, res) => {
  const message = req.body;
  const id = req.params.id;

  try {
    await model.findByIdAndUpdate(id, {
      $push: { messages: message },
    });

    res.status(201).json(message);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
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

export default router;
