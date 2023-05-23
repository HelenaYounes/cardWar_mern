import { useDeckContext } from "../context/DeckContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useDeckContext();

  const createDeck = () => {
    const fetchOptions = {
      method: "POST",
      body: "",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("http://localhost:4000/decks", fetchOptions)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "createDeck",
          payload: { deck: data },
        });
      });
  };

  useEffect(() => {
    createDeck();
  }, []);

  return (
    <>
      <header>Card War</header>
      <h1>Home page</h1>
      <button
        onClick={() => {
          navigate("/decks/" + state.deck._id);
        }}
      >
        create deck
      </button>
      <footer>Footer</footer>
    </>
  );
};

export default Home;
