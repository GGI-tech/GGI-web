import Head from 'next/head';
import Navbar from '../components/global/Navbar';
import '../styles/globals.css';

// import Script from 'next/script'
// import { useRouter } from 'next/router';
// import { useEffect } from "react";
// import * as gtag from "../lib/gtag"

import { GoogleAnalytics } from "nextjs-google-analytics";

function MyApp({ Component, pageProps }) {
  // const ga = `https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`;
  // const router = useRouter();

  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     gtag.pageview(url);
  //   };

  //   router.events.on("routeChangeComplete", handleRouteChange);

  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);

  return (
    <>
      {/* <Script strategy="afterInteractive" src={ga}></Script>
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `,
        }}
      /> */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GoogleAnalytics gaMeasurementId={process.env.GOOGLE_ANALYTICS} trackPageViews={{ ignoreHashChange: true }} />     

      <Navbar />
      
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
