import { useState, useEffect } from "react";
import Card from "./Card";
import backCard from "../images/backcard.jpg";
import { useDeckContext } from "../context/DeckContext";

const Deck = () => {
  const { state, dispatch } = useDeckContext();
  // const [cards, setCards] = useState([]);
  // const [deck, setDeck] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:4000/deck")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setCards(data);
  //     });
  // }, []);

  return (
    <>
      {state.deck.map((card) => (
        <Card key={card._id} image={card.image} />
      ))}
    </>
  );
};

export default Deck;
