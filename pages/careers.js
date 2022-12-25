import React from 'react'
import Head from 'next/head';
import Careers from '../components/pages/Careers';

const careers = () => {
  return (
    <>
      <Head>
        <title>Careers | Global Governance Initiative </title>
        <link rel='icon' href='/favicon.jpg' />
      </Head>
      <Careers/>
    </>
  )
}

export default careers