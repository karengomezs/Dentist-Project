import globalContext from "../context/global-context";
import { useContext } from "react";

export default function Footer() {
  const state = useContext(globalContext);
  return (
    <footer>
      <div className="row justify-content-md-center">
        <div className="col text-center bg-danger">HI</div>
      </div>
      <div className="row">
        <div className="col">DIGITAL HOUSE</div>
        <div className="col col-lg-1">
          <i className="fa-brands fa-facebook"></i>
        </div>

        <div className="col col-lg-1">
          <i className="fa-brands fa-instagram"></i>
        </div>
        <div className="col col-lg-1">
          <i className="fa-brands fa-whatsapp"></i>
        </div>
        <div className="col col-lg-1">
          <i className="fa-brands fa-tiktok"></i>
        </div>
      </div>
    </footer>
  );
}
