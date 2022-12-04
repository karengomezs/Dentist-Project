import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { apiUrl, getDentistId } from "../../api/getDentist";
import NavBar from "../../components/nav-bar";

export default function Dentistdetail() {
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
    <div>
      <NavBar />
      <h1 className="text-center lh-lg">Detail Dentist {dentist.id}</h1>
      <table className="table table-bordered border">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentist.name}</td>
            <td>{dentist.email}</td>
            <td>{dentist.phone}</td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
