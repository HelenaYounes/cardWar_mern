import { useContext } from "react";
import { DeckContext, DeckContextDispatch } from "../context/DeckContext";
import Card from "./Card";
const Deck = ({ player }) => {
  return <Card card={player.cards[0]} />;
};

export default Deck;
