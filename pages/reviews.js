import Employment from "../components/pages/Employment"
import Head from "next/head"
const reviews = () => {
  return (
    <>
      <Head>
        <title>GGI Honest Reviews | Global Governance Initiative</title>
        <meta property="description" content="Honest reviews of the Global Governance Initiative program from the own words of its beneficiaries."/>
        <link rel='icon' href='/favicon.jpg' />
      </Head>
      <Employment />
    </>
  )
}

export default reviews

