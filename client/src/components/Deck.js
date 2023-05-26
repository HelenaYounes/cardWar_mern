import { useContext } from "react";
import { DeckContext } from "../context/DeckContext";
import Card from "./Card";

const Deck = ({ player, cards }) => {
  const state = useContext(DeckContext);
  const round = state.round;
  return (
    <div className={player ? "split left" : "split right"}>
      <div className="centered">
        <Card card={cards[round]} />
      </div>
    </div>
  );
};

export default Deck;
