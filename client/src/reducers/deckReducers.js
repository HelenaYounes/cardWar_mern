export const deckReducer = (state, action) => {
  switch (action.type) {
    case "turnCard":
      return {
        ...state,
        isTurned: true,
      };
    case "saveDecks":
      return {
        ...state,
        player: { ...state.player, cards: action.playerCards },
        bot: { ...state.bot, cards: action.botCards },
      };
    case "incScore":
      if (state.round < 25) {
        if (action.payload) {
          return {
            ...state,
            player: { ...state.player, score: state.player.score + 1 },
            isTurned: false,
            round: state.round + 1,
          };
        } else {
          return {
            ...state,
            bot: { ...state.bot, score: state.bot.score + 1 },
            isTurned: false,
            round: state.round + 1,
          };
        }
      } else {
        return state;
      }
    default:
      return state;
  }
};
