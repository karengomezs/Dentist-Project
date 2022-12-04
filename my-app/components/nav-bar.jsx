import Link from "next/link";
import globalContext from "../context/global-context";
//esto useContext es para leer el contexto que creé
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const { isDark, setDark } = useContext(globalContext);

  return (
    <nav
      className={`navbar navbar-expand-lg  ${
        isDark ? "navbar-dark bg-dark" : "bg-light"
      } `}
    >
      <div className="navbar-brand  col-sm-9">
        <span className="text-danger">D</span>
        <span>H </span>
        <span>Odonto</span>
      </div>
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
              setDark(!isDark);
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
