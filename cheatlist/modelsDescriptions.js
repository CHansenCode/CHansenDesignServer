const gallerySchema = mongoose.Schema({
  //VIEWING data for webpage
  title: String, //ex. "Main room panorama"
  subTitle: String, //ex. 'Visualisation' depicting the 'final' proposal for the 'Main room' <50 characters
  description: String, //excerpt style <55 words

  //SEO / ACCESSABILITY data
  alt: String,

  //SORTATION data for .filter() etc
  category: String, //ex. "Architecture"
  project: String, //ex. "Ishallen"

  stage: { type: String, default: "investigative" }, //OPTIONS: "investigative", "proposal", "progress" or "final"
  stageType: { type: String, default: "drawing" }, //OPTIONS: "measuring", "conceptual", "proposal", "progress" or "final"
  drawingType: String, // "sitemap", "section", "plan", "elevation", "axonometric" etc.. (archetypes)
  tags: Array,

  //FILE data for routing
  fileName: String, // "fileName.jpg/png"
  url: String, // "https://media.chansen.design/category/project/fileName.jpg"
  thumbnail: String, // "https://media.chansen.design/category/project/thumbnail/fileName.jpg"
  alt: String, //ex. "ishallen architecture chansen design..."

  //ARCHIVAL data for db
  createdAt: {
    type: Date,
    default: new Date(),
  },
  createdBy: {
    type: String,
    default: "CHansen",
  },
});
