import { useContext } from "react";
import { DeckContext } from "../context/DeckContext";
import Card from "./Card";

const Deck = ({ player, cards }) => {
  const state = useContext(DeckContext);
  const round = state.round;
  const score = player ? state.player.score : state.bot.score;
  return (
    <div className={player ? "split left" : "split right"}>
      <div className="centered">
        <Card card={cards[round]} />
        <h4>Score = {score}</h4>
      </div>
    </div>
  );
};

export default Deck;
