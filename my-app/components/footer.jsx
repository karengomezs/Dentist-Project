import globalContext from "../context/global-context";
import { useContext } from "react";

export default function Footer() {
	const state = useContext(globalContext);
	return (
		<footer>
			<div className="row justify-content-md-center">
				<h5 className="col text-center bg-danger text-bg-dark p-3 ">Todos los derechos reservados</h5>		
        </div>
				<div className="container">
					<div className="row"></div>
					<div className="col-xs-12 col-md-7 text-left">
						<img
							src="/images/DH.png"
							className="card-img-top w-25 h-25"
							alt="..."
						/>
					</div>
				</div>
				<div className="container">
				<div className="row">
					<div className="col-xs-10 col-md-50 text-right">
							<i className="fa-brands rounded float-end fa-facebook"></i>
							<i className="fa-brands rounded float-end fa-instagram"></i>
							<i className="fa-brands rounded float-end fa-whatsapp"></i>
              				<i className="fa-brands rounded float-end fa-tiktok"></i>
							  </div>
					</div>
				</div>
		</footer>
	);
}
