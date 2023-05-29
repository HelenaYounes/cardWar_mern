export const deckReducer = (state, action) => {
  switch (action.type) {
    case "turnCard":
      return {
        ...state,
        isTurned: true,
      };
    case "saveGame":
      return {
        ...state,
        player: action.payload.player,
        bot: action.payload.bot,
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
