import "../styles/globals.css";
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'

import { GlobalProvider } from "../context/global-context";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default MyApp;
