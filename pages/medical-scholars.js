import React from 'react'
import MedicalScholars from '../components/pages/MedicalScholars'
import Head from 'next/head'
const medicalscholars = () => {
  return (
    <>
      <Head>
        <title>GGI Medical Scholars 2023 | GGI</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel='icon' href='/favicon.jpg' />
      </Head>
      <MedicalScholars />
    </>
  )
}

export default medicalscholars