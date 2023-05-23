import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import DeckContext from "./context/DeckContext.js";
import { deckReducer } from "./reducers/deckReducers.js";
import Home from "./components/Home.js";
import Deck from "./components/Deck.js";
import backCard from "./images/backcard.jpg";
import "./App.css";

const init = JSON.parse(localStorage.getItem("deck")) || {
  _id: null,
  cards: [
    {
      image: backCard,
    },
  ],
};

function App() {
  const [state, dispatch] = useReducer(deckReducer, init);
  const deckStateProvider = {
    state,
    dispatch,
  };
  return (
    <DeckContext.Provider value={deckStateProvider}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/decks/:id" element={<Deck />} />
      </Routes>
    </DeckContext.Provider>
  );
}

export default App;
