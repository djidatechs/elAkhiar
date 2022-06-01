import React from "react";
import Client from "../layouts/Client.js";
import '../styles/globals.css'
export default function App({Component , pageProps}) {
 
    const Layout = Component.getLayout || Client
    return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
    );
}

