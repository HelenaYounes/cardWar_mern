import { useContext } from "react";
import { DeckContext } from "../context/DeckContext";
import Card from "./Card";

const Deck = ({ player }) => {
  const { round } = useContext(DeckContext);
  return <Card card={player.cards[round]} />;
};

export default Deck;
