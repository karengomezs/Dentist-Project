import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import globalContext from "../context/global-context";
//esto useContext es para leer el contexto que creé
import { useContext } from "react";

export default function Home() {
  //acá se atrapa lo que está en el value del provider
  const state = useContext(globalContext);
  console.log(state);
  return (
    <div className={styles.container}>
      <h1>acá empiezo</h1>
      <button
        onClick={() => {
          state.setMode("dark");
        }}
      >
        dark mode
      </button>
      <Link href="/new">kj</Link>
    </div>
  );
}
