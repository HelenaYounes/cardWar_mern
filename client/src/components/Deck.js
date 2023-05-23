import { useState } from "react";
import { useDeckContext } from "../context/DeckContext.js";
import Card from "./Card";

const Deck = () => {
  const { state, dispatch } = useDeckContext();
  const [round, setRound] = useState(0);
  const [playerCards, setPlayerCards] = useState([]);
  const [botCards, setBotCards] = useState([]);
  const cardImg = state.cards[round].image;
  return (
    <>
      <div className="split left">
        <div className="centered">
          <Card image={cardImg} />
        </div>
      </div>

      <div className="split right">
        <div className="centered">
          <Card image={cardImg} />
        </div>
      </div>
    </>
  );
};

export default Deck;
