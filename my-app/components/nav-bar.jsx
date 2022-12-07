import Link from "next/link";
import globalContext from "../context/global-context";
//esto useContext es para leer el contexto que creé
import { useContext } from "react";

export default function NavBar() {
  const { isDark, dispatch } = useContext(globalContext);

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isDark ? "navbar-dark bg-secondary" : "bg-light"
      }`}
    >
      <div className="navbar-brand col-sm-10">
        <span className="text-danger">D</span>
        <span>H </span>
        <span>Odonto</span>
      </div>
      <ul className="navbar-nav">
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
              dispatch({ type: "changeMode" });
            }}
            className={`btn ${isDark ? "btn-warning" : " btn-primary"}`}
          >
            <i className={!isDark ? "fa-solid fa-moon" : "fa-solid fa-sun"}></i>
          </button>
        </li>
      </ul>
    </nav>
  );
}
