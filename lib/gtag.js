import Head from 'next/head';


export const Googleanalytics = () => {
    return (
      <>
        <Head>
          {/* Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-10Q2ZMVRZG"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-10Q2ZMVRZG');
              `
            }}
          />
        </Head>
        {/* Rest of your component */}
      </>
    );
};


export const GA_MEASUREMENT_ID = process.env.GOOGLE_ANALYTICS;

export const pageview = (url) => {
    window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: url,
    });
};

export const event = ({ action, category, label, value }) => {
    window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value,
    });
};


