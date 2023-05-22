import { useState, useEffect } from "react";
import Card from "./Card";

const Deck = () => {
  const [card, setCard] = useState({});
  useEffect(() => {
    fetch("http://localhost:4000/card")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);
  return <Card card={card} />;
};

export default Deck;
