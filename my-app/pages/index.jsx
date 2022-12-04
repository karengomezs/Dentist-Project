import Link from "next/link";
import styles from "../styles/Home.module.css";
import globalContext from "../context/global-context";
//esto useContext es para leer el contexto que creé
import { useContext, useEffect } from "react";
import NavBar from "../components/nav-bar";
import Card from "../components/card";
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

      <div class="row">
        {state.dentistsList.map((dentist) => {
          return (
            <Card name={dentist.name} username={dentist.username} icon="❤️" />
          );
        })}
      </div>
    </div>
  );
}
