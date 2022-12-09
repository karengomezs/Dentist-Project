import globalContext from "../context/global-context";
//esto useContext es para leer el contexto que creé
import { useContext, useEffect } from "react";
import NavBar from "../components/nav-bar";
import Card from "../components/card";
import { getDentists, apiUrl } from "../api/getDentist";
import H2 from "../components/h2";
import { saveDentist } from "../api/favs";
import Footer from "../components/footer";

export default function Home() {
  //acá se atrapa lo que está en el value del provider
  const state = useContext(globalContext);

  useEffect(() => {
    getDentists(apiUrl).then((data) => {
      state.setDentistsList(data);
    });
  }, []);

  return (
    <div
      className={`min-vh-100 max-vw-100 ${
        state.isDark ? "bg-secondary" : "bg-body"
      } `}
    >
      <NavBar />
      <main className="container">
        <H2>HOME</H2>
        <div className="row">
          {state.dentistsList.map((dentist) => {
            return (
              <Card
                key={dentist.id}
                dentist={dentist}
                onClick={() => {
                  saveDentist(dentist);
                  window.alert("Dentist added successfully");
                }}
                icon="⭐"
              />
            );
          })}
          {/* aca agregue */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
