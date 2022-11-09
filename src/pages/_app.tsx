// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from "react";
import "../assets/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import Footer from "../components/Footer/Footer";
import store, { wrapper } from "../redux/store";
import Router from "next/router";
import { Spinner } from "react-bootstrap";
function MyApp({ Component, pageProps }: AppProps) {
  const [state, setState] = useState(false);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Header state={state} setState={setState} />
      {loading ? (
        <div className="vh-100 d-flex justify-content-center p-5">
          <Spinner size="lg" animation="border" />
        </div>
      ) : (
        <Component {...pageProps} state={state} setState={setState} />
      )}

      <Footer />
      <div id="modal__root" />
    </>
  );
}

export default wrapper.withRedux(MyApp);
