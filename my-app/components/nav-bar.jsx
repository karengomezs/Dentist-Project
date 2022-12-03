import Link from "next/link";
import globalContext from "../context/global-context";
//esto useContext es para leer el contexto que creé
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const globalState = useContext(globalContext);
  console.log(globalState);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="navbar-brand col-sm-9">DH Odonto</div>
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className="nav-link active" href="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" href="/contact">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" href="/favs">
            Favs
          </Link>
        </li>
        <li className="nav-item">
          <button
            onClick={() => {
              if (globalState.isDark) {
                globalState.setMode("light");
              } else {
                globalState.setMode("dark");
              }
            }}
            className="btn btn-secondary"
          >
            <FontAwesomeIcon icon={faMoon} />
          </button>
        </li>
      </ul>
    </nav>
  );
}
