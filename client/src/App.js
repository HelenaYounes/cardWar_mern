import { useReducer } from "react";
import { deckReducer } from "./reducers/deckReducers.js";
import { DeckContext, DeckContextDispatch } from "./context/DeckContext.js";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Board from "./components/Board.js";
import "./App.css";

let initCard = {
  images: {
    svg: "https://deckofcardsapi.com/static/img/QD.svg",
    png: "https://deckofcardsapi.com/static/img/QD.png",
  },
  _id: { $oid: "646a6ba4668ee465bc78ce3f" },
  code: "QD",
  image: "https://deckofcardsapi.com/static/img/QD.png",
  value: "12",
  suit: "DIAMONDS",
  __v: { $numberInt: "0" },
  isDrawn: false,
};

let init = {
  _id: { $oid: "646d52bfc1bb005a2e8810f8" },
  playerCards: [],
  botCards: [],
  round: 0,
};

function App() {
  const [state, dispatch] = useReducer(deckReducer, init);

  return (
    <DeckContext.Provider value={state}>
      <DeckContextDispatch.Provider value={dispatch}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="decks/:id" element={<Board />} />
        </Routes>
      </DeckContextDispatch.Provider>
    </DeckContext.Provider>
  );
}

export default App;
