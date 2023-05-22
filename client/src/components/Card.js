import backCard from "../images/backcard.jpg";
import { useState } from "react";

const Card = ({ card }) => {
  const [front, setFront] = useState(true);
  return (
    <div onClick={() => setFront(!front)}>
      <img src={front ? card : backCard} alt="" />
    </div>
  );
};
export default Card;
