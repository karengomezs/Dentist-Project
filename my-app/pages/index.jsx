import globalContext from "../context/global-context";
//esto useContext es para leer el contexto que creé
import { useContext, useEffect } from "react";
import NavBar from "../components/nav-bar";
import Card from "../components/card";
import { getDentists, apiUrl } from "../api/getDentist";
import H2 from "../components/h2";
import { saveDentist } from "../api/favs";

export default function Home() {
  //acá se atrapa lo que está en el value del provider
  const state = useContext(globalContext);

  useEffect(() => {
    getDentists(apiUrl).then((data) => {
      state.setDentistsList(data);
    });
  }, []);

  return (
    <div className={`container ${state.isDark ? "bg-dark" : "bg-body"} `}>
      <NavBar />

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
      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col col-lg-2">1 of 3</div>
          <div class="col-md-auto">Variable width content</div>
          <div class="col col-lg-2">3 of 3</div>
        </div>
        <div class="row">
          <div class="col">1 of 3</div>
          <div class="col-md-auto">Variable width content</div>
          <div class="col col-lg-2">3 of 3</div>
        </div>
      </div>
    </div>
  );
}
