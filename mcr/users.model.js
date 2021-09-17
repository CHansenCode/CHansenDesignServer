import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  isAdmin: false,
  activeToken: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Users = mongoose.model("Users", userSchema, "Users");

export default Users;
