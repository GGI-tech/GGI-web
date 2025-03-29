import GGILife from "/components/pages/GGILife.jsx";
import Head from "next/head";

const LifeAtGGI = () => {
  return (
    <>
      <Head>
        <title>Life at GGI | Global Governance Initiative</title>
        <meta 
          name="description" 
          content="Explore Life at GGI – A transformative experience in policy, consulting, and leadership."
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/favicon.jpg" />
        <link rel="canonical" href="https://www.globalgovernanceinitiative.org/life-at-ggi" />

        {/* Open Graph & Twitter Meta Tags */}
        <meta property="og:title" content="Life at GGI | Global Governance Initiative" />
        <meta 
          property="og:description" 
          content="Discover what it's like to be a part of the GGI community – a vibrant learning ecosystem for future leaders."
        />
        <meta property="og:image" content="/ggi-life-banner.jpg" />
        <meta property="og:url" content="https://www.globalgovernanceinitiative.org/life-at-ggi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Life at GGI | Global Governance Initiative" />
        <meta name="twitter:image" content="/ggi-life-banner.jpg" />
      </Head>

      <GGILife />
    </>
  );
};

export default LifeAtGGI;
