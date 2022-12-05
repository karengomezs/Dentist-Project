import "../styles/globals.css";
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'

import { GlobalProvider } from "../context/global-context";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default MyApp;
