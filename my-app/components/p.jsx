import globalContext from "../context/global-context";

import { useContext } from "react";

export default function P(props) {
  const state = useContext(globalContext);
  return (
    <p
      className={`text-center fw-bold lh-lg ${
        state.isDark ? "text-light" : "text-dark"
      } `}
    >
      {props.children}
    </p>
  );
}
