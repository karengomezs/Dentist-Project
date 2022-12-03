import { createContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  return (
    <GlobalContext.Provider value={{ mode: "light" }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
