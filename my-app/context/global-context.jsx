import { createContext, useState } from "react";
//acá se crea el contexto
const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [isDark, setDark] = useState(false); //PASAR ESTO A REDUCER
  const [dentistsList, setDentistsList] = useState([]);

  return (
    <GlobalContext.Provider
      value={{ isDark, setDark, dentistsList, setDentistsList }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
