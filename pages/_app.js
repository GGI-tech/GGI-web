import Head from 'next/head';
import Navbar from '../components/global/Navbar';
import '../styles/globals.css';

import { GoogleAnalytics } from "nextjs-google-analytics";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GoogleAnalytics gaMeasurementId={`${process.env.GOOGLE_ANALYTICS}`} trackPageViews={{ ignoreHashChange: true }} />     

      <Navbar />
      
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
