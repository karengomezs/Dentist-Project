import { createContext, useState } from "react";
//acá se crea el contexto
const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [mode, setMode] = useState("light");

  return (
    <GlobalContext.Provider value={{ mode, setMode }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
