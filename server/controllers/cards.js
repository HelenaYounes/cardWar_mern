import Card from "../models/Card.js";

export const find = async (req, res) => {
  const card = await Card.findOne({ code: "QH" });
  res.json(card.image);
};
