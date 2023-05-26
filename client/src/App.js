import { useReducer } from "react";
import { deckReducer } from "./reducers/deckReducers.js";
import { DeckContext, DeckContextDispatch } from "./context/DeckContext.js";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Board from "./components/Board.js";
import "./App.css";

let init = {
  _id: { $oid: "646d52bfc1bb005a2e8810f8" },
  player: {
    cards: [],
    score: 0,
  },
  bot: { cards: [], score: 0 },
  round: 0,
  isTurned: false,
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
