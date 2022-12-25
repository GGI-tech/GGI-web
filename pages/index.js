
import Main from "../components/pages/Main";
import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>Global Governance Initiative | MBA &amp; Fellowship</title>
        <meta name='description' content="Global Governance Initiative is the world's most practical MBA and Fellowship School that lets you get into Management Consulting, Policy, and Product Management roles. " />
        <link rel='icon' href='/favicon.jpg' />
      </Head>
      
      <Main/>
    </>
  );
}
