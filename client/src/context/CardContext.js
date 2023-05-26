import { createContext, useContext } from "react";

const CardContext = createContext(null);
export const useCardContext = () => useContext(CardContext);

export default CardContext;
