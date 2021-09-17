import mongoose from "mongoose";

const architectureProjectSchema = mongoose.Schema({
  title: String,
  subtitle: String,
  body: String,
  tags: [String],
  heroUrl: String,
  published: false,

  pages: [
    {
      title: String,
      subtitle: String,
      paragraphs: Array,
      imgUrl: String,
    },
  ],
  media: [
    {
      title: String,
      description: String,
      scale: Number,
      northRotation: { type: Number, min: 0, max: 360 },
      tags: Array,
      programs: Array,
      drawingType: String,
      url: String,
    },
  ],
  createdAt: {
    type: Date,
    default: new Date(),
  },
  createdBy: {
    type: String,
    default: "CHansen",
  },
});

const ArchitectureProject = mongoose.model("ArchitectureProject", architectureProjectSchema, "Architecture Projects");

export default ArchitectureProject;
