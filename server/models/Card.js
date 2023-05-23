import mongoose from "mongoose";

const { Schema, model } = mongoose;
const cardSchema = new Schema(
  {
    code: String,
    image: String,
    images: {
      svg: String,
      png: String,
    },
    value: String,
    suit: String,
  }
  // { strict: false }
);

const Card = model("card", cardSchema);
export default Card;
