import { readDentists } from "../api/favs";
import Card from "../components/card";
import H2 from "../components/h2";
import globalContext from "../context/global-context";
import { useContext, useEffect, useState } from "react";
import NavBar from "../components/nav-bar";
import { saveDentist } from "../api/favs";

export default function Favs() {
  useEffect(() => {
    const dentistsList = readDentists();
    setDentistsArray(dentistsList);
  }, []);

  const [dentistArray, setDentistsArray] = useState([]);

  const state = useContext(globalContext);

  return (
    <div className={`${state.isDark ? "bg-dark" : "bg-body"} `}>
      <NavBar />

      <main className="container">
        <H2>FAVORITE DENTISTS</H2>
        <div className="row">
          {dentistArray.map((dentist) => {
            return (
              <Card
                key={dentist.id}
                dentist={dentist}
                onClick={() => {
                  const dentistTotals = dentistArray.filter((dent) => {
                    return dent.id !== dentist.id;
                  });
                  saveDentist(dentist);
                  setDentistsArray(dentistTotals);
                }}
                icon="⭐"
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
