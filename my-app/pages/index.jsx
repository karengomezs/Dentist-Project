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

      <div class="row">
        {state.dentistsList.map((dentist) => {
          return (
            <div class="col-sm-3">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="/images/doctor.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{dentist.name}</h5>
                  <p className="card-text">{dentist.username}</p>
                  <a href="#" className="btn btn-primary">
                    ❤️
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
