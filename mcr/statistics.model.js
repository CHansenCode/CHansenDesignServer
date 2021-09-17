import mongoose from "mongoose";

const statisticsSchema = mongoose.Schema({
  pageLoads: Number,
  frontpage: {
    clickedOn: Number,
    bottomOfPage: Number,
  },
  pageOne: {
    clickedOn: Number,
    bottomOfPage: Number,
  },
  contactPage: {
    clickedOn: Number,
    bottomOfPage: Number,
  },
  aboutPage: {
    clickedOn: Number,
    bottomOfPage: Number,
  },
});

const Statistics = mongoose.model("Statistics", statisticsSchema, "Statistics");

export default Statistics;
