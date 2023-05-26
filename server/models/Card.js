import mongoose from "mongoose";

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

const Card = model("Card", cardSchema);
export default Card;
