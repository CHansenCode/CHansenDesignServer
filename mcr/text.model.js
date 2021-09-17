import mongoose from "mongoose";

const textSchema = mongoose.Schema({
  pageTitle: String,
  index: Number,
  paragraphs: [
    {
      title: String,
      body: String,
    },
  ],
});

const Text = mongoose.model("Text", textSchema, "Texts");

export default Text;
