import globalContext from "../context/global-context";

import { useContext } from "react";

export default function Span(props) {
  const state = useContext(globalContext);
  return (
    <span className={` ${state.isDark ? "text-light" : "text-dark"} `}>
      {props.children}
    </span>
  );
}
