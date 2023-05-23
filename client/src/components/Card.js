import backCard from "../images/backcard.jpg";
import { useState } from "react";

const Card = ({ image }) => {
  const [front, setFront] = useState(true);
  return (
    <div onClick={() => setFront(!front)}>
      <img src={front ? image : backCard} alt="" />
    </div>
  );
};
export default Card;
