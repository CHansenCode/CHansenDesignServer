import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  isAdmin: false,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Users = mongoose.model("Users", userSchema, "Users");

export default Users;
