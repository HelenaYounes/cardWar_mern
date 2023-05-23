export const deckReducer = (state, action) => {
  switch (action.type) {
    case "setDeck":
      return action.payload;
    default:
      return state;
  }
};
