import mongoose from "mongoose";

//LEARNING PROJECT OF DIGGIGN DOWN IN NESTED ARRAYS & OBJECTS

const projectPlanSchema = mongoose.Schema({
  title: String,
  description: String,
  imgUrl: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  tasks: { type: Array, default: [] },
});

const ProjectPlan = mongoose.model(
  "ProjectPlan",
  projectPlanSchema,
  "ProjectPlan"
);

export default ProjectPlan;
