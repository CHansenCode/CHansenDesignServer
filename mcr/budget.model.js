import mongoose from "mongoose";

const budgetSchema = mongoose.Schema({
  title: String,
  category: String,
  value: Number,
  note: String,
  person: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Budget = mongoose.model("budget", budgetSchema, "budget");

export default Budget;
