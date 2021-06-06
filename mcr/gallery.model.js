import mongoose from "mongoose";

const gallerySchema = mongoose.Schema({
  //VIEW
  title: String,
  subtitle: String,
  description: String,
  scale: Number,
  northRotation: { type: Number, min: 0, max: 360 },

  //SEO
  alt: String,

  //FILTERS
  category: String,
  project: String,
  stage: String,
  stageType: String,
  drawingType: String,
  tags: Array,

  //FILE
  fileName: String,
  url: String,
  thumbnail: String,

  //ARCHIVALS
  createdAt: {
    type: Date,
    default: new Date(),
  },
  createdBy: {
    type: String,
    default: "CHansen",
  },
});

const Gallery = mongoose.model("Gallery", gallerySchema, "Gallery");

export default Gallery;
