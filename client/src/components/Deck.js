import { useState } from "react";
import Card from "./Card";
import { useDeckContext } from "../context/DeckContext.js";

const Deck = () => {
  const { state } = useDeckContext();

  const [currentCard, setCurrentCard] = useState(0);
  const [botCard, setBotCard] = useState(1);
  const cardImage = state.deck.cards[currentCard].image;
  const imageBot = state.deck.cards[botCard].image;

  return (
    <>
      <div className="split left">
        <div className="centered">
          <Card image={cardImage} />
        </div>
      </div>

      <div className="split right">
        <div className="centered">
          <Card image={imageBot} />
        </div>
      </div>
    </>
  );
};

export default Deck;
