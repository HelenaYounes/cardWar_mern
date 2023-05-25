export const deckReducer = (state, action) => {
  switch (action.type) {
    case "setDeck":
      return action.payload;
    case "saveDecks":
      return {
        ...state,
        botCards: action.botCards,
        playerCards: [...action.playerCards],
      };
    case "nextRound":
      if (state.round < 25) {
        return { ...state, round: state.round + 1 };
      } else {
        return state;
      }
    default:
      return state;
  }
};
