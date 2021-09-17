import mongoose from "mongoose";

const chatSchema = mongoose.Schema({
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
      createdAt: {
        type: Date,
        default: new Date(),
      },
    },
  ],
  lastUpdated: {
    type: Date,
    default: new Date(),
  },
});

const Chats = mongoose.model("chats", chatSchema, "chats");

export default Chats;
