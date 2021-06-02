import mongoose from "mongoose";

const gallerySchema = mongoose.Schema({
  title: String,
  subtitle: String,
  alt: String,
  category: String,
  project: String,
  stage: String,
  description: String,
  url: String,
  thumbnail: String,
  file: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Gallery = mongoose.model("Gallery", gallerySchema, "Gallery");

export default Gallery;
