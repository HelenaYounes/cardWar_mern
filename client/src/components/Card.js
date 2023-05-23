import backCard from "../images/backcard.jpg";
import { useState } from "react";

const Card = ({ image }) => {
  const [front, setFront] = useState(false);
  return (
    <div onClick={() => setFront(!front)}>
      <img src={front ? image : backCard} alt="" />
    </div>
  );
};
export default Card;
