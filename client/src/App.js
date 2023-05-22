import { useState, useEffect } from "react";
import Card from "./components/Card.js";
import "./App.css";

function App() {
  const [card, setCard] = useState({});
  useEffect(() => {
    fetch("http://localhost:4000/card")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  return (
    <div className="App">
      <header>Card War</header>
      <Card card={card} />
      <footer>Footer</footer>
    </div>
  );
}

export default App;
