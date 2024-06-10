import React from 'react'
import Head from 'next/head';
import Careers from '../components/pages/Careers';

const careers = () => {
  return (
    <>
      <Head>
        <title>Careers | Global Governance Initiative </title>
        <meta
          name='description'
          content='Explore career opportunities at Global Governance Initiative. '
        />
        <link rel='icon' href='/favicon.jpg' />
      </Head>
      <Careers/>
    </>
  )
}

export default careers