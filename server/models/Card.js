import mongoose from "mongoose";
import { dbCardsConnection } from "../config/db.js";

const { Schema, model } = mongoose;
const cardSchema = new Schema({
  code: String,
  image: String,
  images: {
    svg: String,
    png: String,
  },
  value: Number,
  suit: String,
});

const Card = dbCardsConnection.model("Card", cardSchema);
export default Card;
