export const deckReducer = (state, action) => {
  switch (action.type) {
    case "createDeck":
      return { ...state, deck: action.payload.deck };
    default:
      return state;
  }
};
