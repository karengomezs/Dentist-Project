import globalContext from "../context/global-context";

import { useContext } from "react";

export default function H2(props) {
  const state = useContext(globalContext);
  return (
    <h2
      className={`text-center fw-bold lh-lg ${
        state.isDark ? "text-light" : "text-dark"
      } `}
    >
      {props.children}
    </h2>
  );
}
