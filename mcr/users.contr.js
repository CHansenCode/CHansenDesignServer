import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

import Users from "./users.model.js";

const router = express.Router();

//Validation
import { registerValidation, loginValidation } from "./users.valid.js";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const users = await Users.findById(id);

    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//LOGIN
export const authUser = async (req, res) => {
  const userBody = req.body;

  //Validate form data
  try {
    await loginValidation.validateAsync(userBody);
  } catch (err) {
    return res.status(400).send(err.details[0].message);
  }

  //userExist
  const user = await Users.findOne({ username: req.body.username });
  if (!user) return res.status(400).send("Username cannot be found");

  //HashCheck
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid password");

  //JsonWebToken
  const token = jsonwebtoken.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send({
    username: user.username,
    token: token,
    logTime: new Date(),
  });
};

export const registerUser = async (req, res) => {
  const userBody = req.body;

  //Validate input data structure
  try {
    await registerValidation.validateAsync(userBody);
  } catch (err) {
    return res.status(400).send(err.details[0].message);
  }

  //Check unique username & email
  const usernameExist = await Users.findOne({ username: req.body.username });
  if (usernameExist) return res.status(400).send("Username already in use");
  const emailExist = await Users.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already registered");

  //bcrypt
  const hashedPsw = await bcrypt.hash(userBody.password, 10);

  const newUser = new Users({ ...userBody, password: hashedPsw });

  //Send to db
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//NOT UPDATED
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, password, email } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No project with id: ${id}`);

  const updatedUser = {
    username,
    password,
    email,
    _id: id,
  };

  await Users.findByIdAndUpdate(id, updatedUser, { new: true });

  res.json(updatedUser);
};

//NOT UPDATED
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No user with id: ${id}`);

  await Users.findByIdAndRemove(id);

  res.json({ message: "User deleted successfully." });
};

export default router;
