import { useEffect, useState, useContext } from "react";
import { DeckContext } from "../context/DeckContext";
import backCard from "../images/backcard.jpg";

const Card = ({ card }) => {
  const state = useContext(DeckContext);
  const [front, setFront] = useState(false);

  useEffect(() => {
    setFront(false);
  }, [state.round]);

  return (
    <div>
      <img
        src={front ? card.image : backCard}
        alt=""
        onClick={() => setFront(!front)}
      />
    </div>
  );
};
export default Card;
