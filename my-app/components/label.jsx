import globalContext from "../context/global-context";

import { useContext } from "react";

export default function Label(props) {
  const state = useContext(globalContext);
  return (
    <label
      className={`form-label ${state.isDark ? "text-light" : "text-dark"} `}
      {...props}
    >
      {props.children}
    </label>
  );
}
