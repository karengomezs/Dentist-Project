import globalContext from "../context/global-context";
import { useContext } from "react";

export default function Footer() {
  const state = useContext(globalContext);
  return (
    <footer>
      <div class="row justify-content-md-center">
        <div class="col text-center bg-danger">HI</div>
      </div>
      <div class="row">
        <div class="col">DIGITAL HOUSE</div>
        <div class="col col-lg-1">
          <i class="fa-brands fa-facebook"></i>
        </div>

        <div class="col col-lg-1">
          <i class="fa-brands fa-instagram"></i>
        </div>
        <div class="col col-lg-1">
          <i class="fa-brands fa-whatsapp"></i>
        </div>
        <div class="col col-lg-1">
          <i class="fa-brands fa-tiktok"></i>
        </div>
      </div>
    </footer>
  );
}
