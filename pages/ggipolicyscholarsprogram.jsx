import React from 'react'
import SlidingHero from '../components/global/SlidingHero';
import Accordian from '../components/global/Accordian';
import Socials from '../components/global/Socials';
import Heading from '../components/global/Heading';
import FourColumnLayout from '../components/global/FourColumnLayout';
import Container from '../components/global/Container';
// ------------------------------------------------------------------
import network from '../public/network2.jpeg'
import clinton from '../public/clinton.png'
import arunm from '../public/arun_maira.jpg'
import poets from '../public/poetsnquants.png'

const ggipolicyscholarsprogram = () => {
  const fourcolumndata= [ //to be fetched from database
  {
    "img":arunm,
    "title": "Learn from Industry Leaders",
    "body":"Top Government & Society Leaders write their own policy and social impact cases and teach core Policy Concepts via designing a case-based learning ecosystem."
  },
  {
    "img":clinton,
    "title": "Get Recruited by Top Employers",
    "body":"GGI has forged strong employment partnerships with leading consulting, public policy, product management, and impact investing organizations."
  },
  {
    "img":network,
    "title":"Become Part of Global Network",
    "body":"Global community represents powerful internationally diverse leaders who are at the helm of leading organizations. And this community helps each other out - not just in referring you to your first job, but in navigating a thriving career or in building your startups."
  },
  {
    "img":poets,
    "title":"Globally Recognized",
    "body":"GGI MBA was globally featured by Poets and Quants as the world’s most disruptive Alt MBA program. It was also recognized by BCG Global Media for its learning outcomes "
  }
]
  return (
    <>
      <SlidingHero image={'./mba.jpg'} heading={"Learn Policy Skills Live, Join Global Network & Get Hired at GGI Policy Scholar to Become Leader in Society "} />
      <Heading>Why GGI Policy Scholars  Works?</Heading>
      <FourColumnLayout data={fourcolumndata}/>
      <Heading>+88% GGIians working in Top Policy & Social Impact Roles and Organizations</Heading>
      <Heading>Who is this Program for?</Heading>
      <Heading>Curriculum & Commitment  </Heading>
      <Heading>You Learn along with Diverse Community who Adds to Your Perspective </Heading>
      <Heading>A Liberal Refund Policy for You </Heading>
      <Heading>Learn & Network with World's top CEOs, Partners, And Policy Leaders  </Heading>
      <Heading>As GGI Policy Scholar, You will Immerse Yourself in a Truly Impactful Experience  </Heading>
      <Heading>Program Fees </Heading>
      <Container></Container>
      <Heading>Our Official Partners</Heading>
      <Heading>Our Associations </Heading>
      <Heading>Frequently Asked Questions </Heading>
      <Accordian />
      <Socials />
    </>
  )
}

export default ggipolicyscholarsprogram