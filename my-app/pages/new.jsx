import GlobalContext from "../context/global-context";
import { useContext } from "react";

export default function New() {
    const leerValorContext = useContext(GlobalContext)
    console.log(leerValorContext);

    return (
        <div >
            <h1> empiezo</h1>
        </div>
    )
}