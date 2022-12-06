import { createContext, useState, useReducer } from "react";
//acá se crea el contexto
const GlobalContext = createContext();
const initialValue = false;

function reducer(state, action) {
  switch (action.type) {
    case "changeMode":
      return !state;

    default:
      return state;
  }
}

export const GlobalProvider = (props) => {
  const [isDark, dispatch] = useReducer(reducer, initialValue);
  const [dentistsList, setDentistsList] = useState([]);

  return (
    <GlobalContext.Provider
      value={{ isDark, dispatch, dentistsList, setDentistsList }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
