import React from 'react'
import Hero from '../components/global/Hero'
import Head from 'next/head';
import Image from 'next/image';
import Accordion from '../components/global/Accordian';
import Heading from '../components/global/Heading';
import Container from '../components/global/Container';
const careers = () => {
  return (
    <>
      <Head>
        <title>Careers | Global Governance Initiative </title>
      </Head>
      <Hero key={1} heading='WELCOME TO YOUR GGI CAREER' message='Make your own GGI' image={'./careers.jpg'} />

      <Heading>A Career that fits your calling</Heading>
      <Container>
        <p>At GGI, we grow, lead, and innovate. You&#39;ll thrive in an environment that encourages creative thinking, collaboration, individuality, and diversity. When it comes to solving society&#39;s biggest problems, anything is possible at GGI. Join us in driving meaningful action for the world. </p>
        <p>Whether you&#39;re an experienced professional or a recent graduate, working with Global Governance Initiative could be a challenging and rewarding next step in your career. </p>
      </Container>
      <Heading>GGI Software Development Manager (SDM) Program</Heading>
      <Container>
        <p>Apply for our unique SDM Program to hone your tech skills to build the world&#39;s most innovative tech products at the intersection of learning, and ethical behavior.  You need to be a full stack developer to apply to our SDM Program </p>
      </Container>
      <Heading>Frequently Asked Questions</Heading>
      <Accordion />
    </>
  )
}

export default careers