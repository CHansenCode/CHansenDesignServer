import mongoose from "mongoose";

const ticketSchema = mongoose.Schema({
  title: String,
  body: String,
  category: String,
  whatHappened: String,
  whatSupposed: String,
  etc: String,
  resolved: Boolean,

  status: {
    type: String,
    default: "pending review",
  },
  comments: [
    {
      user: String,
      body: String,
      createdAt: {
        type: Date,
        default: new Date(),
      },
    },
  ],
  createdAt: {
    type: Date,
    default: new Date(),
  },
  createdBy: {
    type: String,
    default: "CHansen",
  },
});

const Ticket = mongoose.model("Ticket", ticketSchema, "Tickets");

export default Ticket;
