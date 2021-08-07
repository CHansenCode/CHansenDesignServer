import mongoose from "mongoose";

const textSchema = mongoose.Schema({
  pageTitle: String,
  index: Number,
  paragraphs: Array,
});

const Text = mongoose.model("Text", textSchema, "Texts");

export default Text;
