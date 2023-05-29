import mongoose from "mongoose";
import { dbPlayersConnection } from "../config/db.js";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: String,
  pass: String,
});

const Player = dbPlayersConnection.model("player", userSchema);
export default Player;
