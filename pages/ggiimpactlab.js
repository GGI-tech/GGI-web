import React from 'react'
import Head from 'next/head'
import YLP from '../components/pages/ImpactLab';
const impactlabyoungleaders = () => {
    return (
        <>
            <Head>
                <title>GGI Impact Lab | Global Governance Initiative</title>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <link rel='icon' href='/favicon.jpg' />
            </Head>
            <YLP />
        </>
    )
}

export default impactlabyoungleaders;