import mongoose from "mongoose";

const architectureProjectSchema = mongoose.Schema({
  title: String,
  subtitle: String,
  tags: [String],
  heroImage: String,
  galleryThumbnail: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  sections: [
    {
      drawingType: String,
      title: String,
      subtitle: String,
      body: String,
      url: String,
    },
  ],
  archiveList: [
    {
      drawingType: String,
      url: String,
    },
  ],
});

const ArchitectureProject = mongoose.model("ArchitectureProject", architectureProjectSchema, "Architecture Projects");

export default ArchitectureProject;
