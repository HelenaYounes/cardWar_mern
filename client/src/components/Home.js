import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
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
        navigate("/decks/" + data._id);
      });
  };
  return (
    <main>
      <div class="intro">
        <h1>A Card Game with Mongo Express React NodeJS</h1>
        <p>Click below to start game against computer.</p>
        <button onClick={createDeck}>create deck</button>
      </div>
      <div class="achievements">
        <div class="work">
          <i class="fas fa-atom"></i>
          <p class="work-heading">Projects</p>
          <p class="work-text">
            I have worked on many projects and I am very proud of them. I am a
            very good developer and I am always looking for new projects.
          </p>
        </div>
        <div class="work">
          <i class="fas fa-skiing"></i>
          <p class="work-heading">Skills</p>
          <p class="work-text">
            I have a lot of skills and I am very good at them. I am very good at
            programming and I am always looking for new skills.
          </p>
        </div>
        <div class="work">
          <i class="fas fa-ethernet"></i>
          <p class="work-heading">Network</p>
          <p class="work-text">
            I have a lot of network skills and I am very good at them. I am very
            good at networking and I am always looking for new network skills.
          </p>
        </div>
      </div>
      <div class="about-me">
        <div class="about-me-text">
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
