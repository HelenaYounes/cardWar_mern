import { useDeckContext } from "../context/DeckContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useDeckContext();

  const createDeck = () => {
    fetch("http://localhost:4000/deck")
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
          navigate("deck");
        }}
      >
        create deck
      </button>
      <footer>Footer</footer>
    </>
  );
};

export default Home;
