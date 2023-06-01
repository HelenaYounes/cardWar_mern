import { useReducer } from "react";
import { Link } from "react-router-dom";
import { deckReducer } from "./reducers/deckReducers.js";
import { DeckContext, DeckContextDispatch } from "./context/DeckContext.js";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Home from "./components/Home.js";
import Board from "./components/Board.js";
import SignIn from "./components/SignIn.js";
import "./App.css";

let init = {
  player: {
    username: "",
    cards: [
      {
        _id: { $oid: "64742a4ee8b5b148493d93db" },
        code: "7S",
        image: "https://deckofcardsapi.com/static/img/7S.png",
        images: {
          svg: "https://deckofcardsapi.com/static/img/7S.svg",
          png: "https://deckofcardsapi.com/static/img/7S.png",
        },
        value: "7",
        suit: "SPADES",
        __v: { $numberInt: "0" },
      },
    ],
    score: 0,
  },
  bot: {
    username: "bot",
    cards: [
      {
        _id: { $oid: "64742a4ee8b5b148493d93db" },
        code: "7S",
        image: "https://deckofcardsapi.com/static/img/7S.png",
        images: {
          svg: "https://deckofcardsapi.com/static/img/7S.svg",
          png: "https://deckofcardsapi.com/static/img/7S.png",
        },
        value: "7",
        suit: "SPADES",
        __v: { $numberInt: "0" },
      },
    ],
    score: 0,
  },
  user: {
    userId: "",
    games: [],
  },
  isLogged: false,
  isTurned: false,
  round: 0,
};

function App() {
  const [state, dispatch] = useReducer(deckReducer, init);

  return (
    <DeckContext.Provider value={state}>
      <DeckContextDispatch.Provider value={dispatch}>
        <div>
          <header className="header">
            <Link to="" className="logo">
              Helena's War game
            </Link>
            <nav className="nav-items">
              <NavBar />
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/:userId" element={<Home />} />
            <Route path="/:userId/games/:gameId" element={<Board />} />
          </Routes>
          <footer className="footer">
            <div className="copy">&copy; 2022 Developer</div>
            <div className="bottom-links">
              <div className="links">
                <span>More Info</span>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
              </div>
              <div className="links">
                <span>Social Links</span>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </DeckContextDispatch.Provider>
    </DeckContext.Provider>
  );
}

export default App;
