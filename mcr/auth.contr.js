import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

import Users from "./users.model.js";
const model = Users;

const router = express.Router();

import { authValidation } from "./auth.valid.js";

export const authUser = async (req, res) => {
  const userBody = req.body;

  //valid
  try {
    await authValidation.validateAsync(userBody);
  } catch (err) {
    return res.status(400).send(err.details[0].message);
  }

  const user = await model.findOne({ username: req.body.username });
  if (!user) return res.status(400).send("Username cannot be found");

  //Password-Check
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid password");

  //JsonWebToken
  const token = jsonwebtoken.sign(
    { _id: user._id, username: user.username, timeCreated: new Date() },
    process.env.TOKEN_SECRET
  );
  res.header("auth-token", token).send({
    token: token,
    logTime: new Date(),
  });
};
