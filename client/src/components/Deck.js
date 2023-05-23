import { useState, useEffect } from "react";
import Card from "./Card";
import backCard from "../images/backcard.jpg";
import { useDeckContext } from "../context/DeckContext";

const Deck = () => {
  const { state, dispatch } = useDeckContext();

  return (
    <>
      {state.deck.cards.map((card) => (
        <Card key={card._id} image={card.image} />
      ))}
    </>
  );
};

export default Deck;
