export const deckReducer = (state, action) => {
  switch (action.type) {
    case "logIn":
      return { ...state, user: action.payload, isLogged: true };
    case "logOut":
      return { ...state, isLogged: false };
    case "turnCard":
      return {
        ...state,
        isTurned: true,
      };
    case "getGames":
      return {
        ...state,
        user: { ...state.user, games: action.data.games },
      };
    case "saveGame":
      return {
        ...state,
      };
    case "incScore":
      if (state.round < 25) {
        return {
          ...state,
          [action.payload.key]: {
            ...state[action.payload.key],
            score: action.payload.value,
          },
          isTurned: false,
          round: state.round + 1,
        };
      } else return alert("end of game");
    default:
      return state;
  }
};
