import { useContext } from "react";
import { DeckContext } from "../context/DeckContext";
import backCard from "../images/backcard.jpg";

const Card = ({ card }) => {
  const { isTurned } = useContext(DeckContext);

  return <img src={isTurned ? card.image : backCard} alt="" />;
};
export default Card;
