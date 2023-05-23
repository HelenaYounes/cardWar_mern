import { createContext, useContext } from "react";

const DeckContext = createContext(null);
export const useDeckContext = () => useContext(DeckContext);

export default DeckContext;
