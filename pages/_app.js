import Head from 'next/head';
import Navbar from '../components/global/Navbar';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import { GoogleAnalytics } from "nextjs-google-analytics";

function MyApp({ Component, pageProps }) {

  const router = useRouter();
  const showHeader = router.pathname.includes('30-under-30') ? false : true;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11172189274"></script>
        <script> 
          {`
          window.dataLayer = window.dataLayer || []; 
          function gtag(){
             dataLayer.push(arguments);
          } 
          gtag('js', new Date());
          gtag('config', 'AW-11172189274'); 
          `}
        </script>
      </Head>
      <GoogleAnalytics gaMeasurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} trackPageViews={{ ignoreHashChange: true }} />
      <Navbar applicationbanner={showHeader}/>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
