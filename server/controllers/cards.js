import Card from "../models/Card.js";

export const find = async (req, res) => {
  const card = await Card.findOne({ _id: req.params.id });
  res.json(card);
};
export const list = async (req, res) => {
  const cards = await Card.find();
  res.json(cards);
};
