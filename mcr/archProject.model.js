import mongoose from "mongoose";

const archProjectSchema = mongoose.Schema({
  title: String, //goes to gallery and pagetitle
  subtitle: String, //pageSubtitle
  tags: [String], //gallery and pageTags
  heroImage: String, //pageHero
  galleryThumbnail: String, // gallery thumbnail
  // description: String,
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

const ArchProject = mongoose.model(
  "ArchProject",
  archProjectSchema,
  "ArchProjects"
);

export default ArchProject;
