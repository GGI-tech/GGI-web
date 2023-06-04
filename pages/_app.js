import Head from 'next/head';
import Navbar from '../components/global/Navbar';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import { GoogleAnalytics } from "nextjs-google-analytics";
import ApplicationBanner from '../components/global/ApplicationBanner';

function MyApp({ Component, pageProps }) {

  const router = useRouter();
  const showHeader = router.pathname.includes('30-under-30') ? false : true;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GoogleAnalytics gaMeasurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} trackPageViews={{ ignoreHashChange: true }} />
      {/* {showHeader &&<ApplicationBanner/>} */}
      <Navbar />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
