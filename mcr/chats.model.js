import mongoose from "mongoose";

const chatSchema = mongoose.Schema(
  {
    users: [
      {
        username: String,
        lastUpdated: { type: Date, default: new Date() },
      },
    ],

    messages: [
      {
        username: String,
        message: String,
      },
    ],
  },
  { timeStamps: true }
);

const Chats = mongoose.model("chats", chatSchema, "chats");

export default Chats;
