import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: String,
  pass: String,
});

const User = model("user", userSchema);
export default User;
