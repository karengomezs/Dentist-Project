import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import { apiUrl, getDentistId } from "../../api/getDentist";
import globalContext from "../../context/global-context";
import NavBar from "../../components/nav-bar";
import H2 from "../../components/h2";
import Span from "../../components/span";

export default function Dentistdetail() {
  const state = useContext(globalContext);
  const router = useRouter();
  const dentistId = router.query.slug;
  const [dentist, setDentist] = useState({});

  useEffect(() => {
    if (dentistId) {
      getDentistId(`${apiUrl}/${dentistId}`).then((data) => {
        setDentist(data);
      });
    }
  }, [dentistId]);

  return (
    <div className={`${state.isDark ? "bg-dark" : "bg-body"} `}>
      <NavBar />
      <main className="container">
        <H2>Detail Dentist {dentist.id}</H2>
        <table className="table table-bordered border">
          <thead>
            <tr>
              <th scope="col">
                <Span>Name</Span>
              </th>
              <th scope="col">
                <Span>Email</Span>
              </th>
              <th scope="col">
                <Span>Phone</Span>
              </th>
              <th scope="col">
                <Span>Website</Span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Span>{dentist.name}</Span>
              </td>
              <td>
                <Span>{dentist.email}</Span>
              </td>
              <td>
                <Span>{dentist.phone}</Span>
              </td>
              <td>
                <Span>{dentist.website}</Span>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}
