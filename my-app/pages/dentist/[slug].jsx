import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { apiUrl, getDentistId } from "../../api/getDentist";

export default function Dentist() {
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

  console.log(dentist);
  return (
    <div>
      <h1>Dentist</h1>
    </div>
  );
}
