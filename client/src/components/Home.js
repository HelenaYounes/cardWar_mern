import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { DeckContext, DeckContextDispatch } from "../context/DeckContext";
const Home = () => {
  const navigate = useNavigate();
  const state = useContext(DeckContext);
  const dispatch = useContext(DeckContextDispatch);
  let { userId } = useParams();

  const createGame = () => {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }),
    };
    fetch("http://localhost:4000/games", fetchOptions)
      .then((res) => res.json())
      .then((data) => {
        debugger;
        console.log(JSON.parse(JSON.stringify(data)));
        dispatch({ type: "saveGame", payload: data });
        navigate(`/${userId}/games/${data._id}`);
      });
  };

  // const fetchGamesList = async (req, res) => {
  //   fetch(`http://localhost:4000/${state.user.userId}/games`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       dispatch({ type: "getGames", data });
  //     });
  // };
  // useEffect(() => {
  //   // state.isLogged ? fetchGamesList() : console.log("not logged in");
  // }, []);

  return (
    <main>
      <div className="intro">
        <h1>A Card Game with Mongo Express React NodeJS</h1>
        <p>Click below to start game against computer.</p>
        <button onClick={createGame}>start new game</button>
      </div>
      <div className="achievements">
        <div className="work">
          <i className="fas fa-atom"></i>
          <p className="work-heading">Projects</p>
          <p className="work-text">
            I have worked on many projects and I am very proud of them. I am a
            very good developer and I am always looking for new projects.
          </p>
        </div>
        <div className="work">
          <i className="fas fa-skiing"></i>
          <p className="work-heading">Skills</p>
          <p className="work-text">
            I have a lot of skills and I am very good at them. I am very good at
            programming and I am always looking for new skills.
          </p>
        </div>
        <div className="work">
          <i className="fas fa-ethernet"></i>
          <p className="work-heading">Network</p>
          <p className="work-text">
            I have a lot of network skills and I am very good at them. I am very
            good at networking and I am always looking for new network skills.
          </p>
        </div>
      </div>
      <div className="about-me">
        <div className="about-me-text">
          <h2>About Me</h2>
          <p>
            I am a web developer and I love to create websites. I am a very good
            developer and I am always looking for new projects. I am a very good
            developer and I am always looking for new projects.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          alt="me"
        />
      </div>
    </main>
  );
};

export default Home;
