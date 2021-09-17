import express from "express";
import mongoose from "mongoose";

const router = express.Router();

import Text from "./text.model.js";
const model = Text;

export const getTexts = async (req, res) => {
  try {
    const posts = await model.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createText = async (req, res) => {
  const data = {
    pageTitle: "",
    index: 0,
    paragraphs: [],
  };

  const newPost = new model(data);

  try {
    await newPost.save(newPost);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json(error.message);
  }
};

export const getText = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await model.findById(id);

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateText = async (req, res) => {
  const { id } = req.params;
  const updatedPost = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No mediaPost with id: ${id}`);

  await model.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
};

export const deleteText = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  await model.findByIdAndRemove(id);

  res.json({ message: "Message deleted successfully." });
};

export const createNewPage = async (req, res) => {
  let pageTitle = req.body.pageTitle;

  if (pageTitle.length < 1) return res.status(400).json("pageTitle required");

  const post = {
    pageTitle: pageTitle,
    index: 0,
    paragraphs: [],
  };

  const newPost = new model(post);

  try {
    await newPost.save(newPost);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json(error.message);
  }
};

export const createNewParagraph = async (req, res) => {
  const { id } = req.params;
  const paragraphTemplate = {
    title: "",
    body: "",
  };

  try {
    await model.findByIdAndUpdate(id, {
      $push: { paragraphs: paragraphTemplate },
    });
    res.status(201).json("Paragraph added");
  } catch (error) {
    res.status(409).json(error.message);
  }
};

export const deleteParagraph = async (req, res) => {
  const pageId = req.params.id;
  const paraId = req.params.paraid;

  if (!mongoose.Types.ObjectId.isValid(pageId)) return res.status(404).send(`No post with id: ${pageId}`);

  try {
    await model.findByIdAndUpdate(
      pageId,
      {
        $pull: { paragraphs: { _id: paraId } },
      },
      { new: true }
    );

    res.status(201).json(`Paragraph successfully removed from ${pageId}`);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export default router;
