import axios from "axios";
import Deck from "../models/Deck.js";
import Card from "../models/Card.js";

const apiUrl = "https://www.deckofcardsapi.com/api/deck/";

export const create = async (req, res) => {
  const deckData = await axios.get(
    "https://www.deckofcardsapi.com/api/deck/new/"
  );
  const newDeck = await deckData.data;
  Deck.create(newDeck);
  res.json(newDeck);
};

export const list = async (req, res) => {
  const decksList = await Deck.find();
  console.log(decksList);
  res.json(decksList);
};

export const find = async (req, res) => {
  const deckSelected = await Deck.find({ id: req.params.deck_id });
  res.json(deckSelected);
};

export const deleteDeck = async (req, res) => {
  await Deck.deleteOne({ id: req.params.id });
  res.send(`deleted deck id: ${req.params.id}`);
};
