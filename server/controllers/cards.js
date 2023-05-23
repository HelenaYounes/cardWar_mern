import Card from "../models/Card.js";

export const find = async (req, res) => {
  const card = await Card.findOne({ code: "QH" });
  res.json(card.image);
};
export const list = async (req, res) => {
  const cards = await Card.find();
  //   const deck = await cards.data;
  res.json(cards);
};
