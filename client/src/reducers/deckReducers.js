export const deckReducer = (state, action) => {
  switch (action.type) {
    case "getDeck":
      return action.payload;
    default:
      return state;
  }
};
