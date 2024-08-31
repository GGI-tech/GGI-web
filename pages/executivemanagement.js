import React from 'react'
import Head from 'next/head'
import Executive from '../components/pages/Executive';
const executivemanagement = () => {
    return (
        <>
            <Head>
                <title>Executive Program | Global Governance Initiative</title>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <link rel='icon' href='/favicon.jpg' />
            </Head>
            <Executive />
        </>
    )
}

export default executivemanagement;