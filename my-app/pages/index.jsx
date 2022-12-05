import globalContext from "../context/global-context";
//esto useContext es para leer el contexto que creé
import { useContext, useEffect } from "react";
import NavBar from "../components/nav-bar";
import Card from "../components/card";
import { getDentists, apiUrl } from "../api/getDentist";
import H2 from "../components/h2";

export default function Home() {
  //acá se atrapa lo que está en el value del provider
  const state = useContext(globalContext);

  useEffect(() => {
    getDentists(apiUrl).then((data) => {
      state.setDentistsList(data);
    });
  }, []);

  return (
    <div className={state.isDark ? "bg-dark" : "bg-body"}>
      <NavBar />

      <H2>HOME</H2>
      <div className="row">
        {state.dentistsList.map((dentist) => {
          return <Card key={dentist.id} dentist={dentist} icon="⭐" />;
        })}
      </div>
    </div>
  );
}
