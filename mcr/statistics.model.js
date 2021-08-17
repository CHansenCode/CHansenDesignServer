import mongoose from "mongoose";

const statisticsSchema = mongoose.Schema({
  title: String,
  counter: Number,
});

const Statistics = mongoose.model("Statistics", statisticsSchema, "Statistics");

export default Statistics;
