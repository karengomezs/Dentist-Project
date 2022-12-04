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

  return (
    <div>
      <NavBar />

      <h2 className="text-center fw-bold lh-lg">HOME</h2>
      <div className="row">
        {state.dentistsList.map((dentist) => {
          return (
            <Card
              key={dentist.id}
              id={dentist.id}
              name={dentist.name}
              username={dentist.username}
              icon="⭐"
            />
          );
        })}
      </div>
    </div>
  );
}
