import globalContext from "../context/global-context";
import { useContext } from "react";

export default function Footer() {
  const state = useContext(globalContext);
  return (
    <footer>
      <h5 className="col text-center bg-danger text-bg-dark p-2  ">
        Todos los derechos reservados
      </h5>

      <div className="col-md-9 text-left d-flex flex-row">
        <img src="/images/DH.png" className="w-25 h-25 ps-5" alt="..." />
        <span className="d-flex flex-row-reverse col-sm-12 align-content-end">
          <i className="fa-brands rounded fs-4 pe-3 pt-3 fa-facebook"></i>
          <i className="fa-brands rounded fs-4 pe-5 pt-3 fa-instagram"></i>
          <i className="fa-brands rounded fs-4 pe-5 pt-3 fa-whatsapp"></i>
          <i className="fa-brands rounded fs-4 pe-5 pt-3 fa-tiktok"></i>
        </span>
      </div>
    </footer>
  );
}
