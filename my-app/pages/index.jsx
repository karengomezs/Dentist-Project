import Link from "next/link";
import styles from "../styles/Home.module.css";
import globalContext from "../context/global-context";
//esto useContext es para leer el contexto que creé
import { useContext, useEffect } from "react";
import NavBar from "../components/nav-bar";
import { getDentists, apiUrl } from "../api/getDentist";

export default function Home() {
  //acá se atrapa lo que está en el value del provider
  const state = useContext(globalContext);

  useEffect(() => {
    getDentists(apiUrl).then((data) => {
      state.setDentistsList(data);
    });
  }, []);

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
