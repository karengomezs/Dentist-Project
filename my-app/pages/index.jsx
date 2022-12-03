import Link from "next/link";
import styles from "../styles/Home.module.css";
import globalContext from "../context/global-context";
//esto useContext es para leer el contexto que creé
import { useContext } from "react";
import NavBar from "../components/nav-bar";

export default function Home() {
  //acá se atrapa lo que está en el value del provider
  const state = useContext(globalContext);
  console.log(state);
  return (
    <div className={styles.container}>
      <NavBar />
      <button
        onClick={() => {
          state.setMode("dark");
        }}
        className="btn btn-primary"
      >
        dark mode
      </button>
      <Link href="/new">kj</Link>
    </div>
  );
}
