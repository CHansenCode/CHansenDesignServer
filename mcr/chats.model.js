import mongoose from "mongoose";

const chatSchema = mongoose.Schema({
  users: [String],
  messages: [
    {
      by: String,
      message: String,
      createdAt: {
        type: Date,
        default: new Date(),
      },
    },
  ],
});

const Chats = mongoose.model("chats", chatSchema, "chats");

export default Chats;
