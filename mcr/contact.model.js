import mongoose from "mongoose";

const contactFormSchema = mongoose.Schema({
  name: String,
  category: String,
  message: String,
  contactInfo: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const ContactForm = mongoose.model("ContactForm", contactFormSchema, "ContactForm");

export default ContactForm;
