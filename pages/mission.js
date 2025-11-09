import React from 'react'
import Accordion from '../components/global/Accordian';
import Container from '../components/global/Container';
import Footer from '../components/global/Footer';
import Heading from '../components/global/Heading';
import Head from 'next/head';
const Mission = () => {
    return (
        <>
            <Head>
                <title>Mission | Global Governance Initiative</title>
                <meta name="description" content="Our mission is to democratize experiential&nbsp;education through young globally accomplished practitioners&nbsp;and unlock potential of the youth at grass root level.&nbsp;" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <link rel='icon' href='/favicon.jpg' />
                <link rel="shortcut icon" href="https://static.wixstatic.com/media/65ca63_b536077bdc99495ca651850cdaca0c92%7Emv2.png/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/65ca63_b536077bdc99495ca651850cdaca0c92%7Emv2.png" type="image/png"/>
                <link rel="apple-touch-icon" href="https://static.wixstatic.com/media/65ca63_b536077bdc99495ca651850cdaca0c92%7Emv2.png/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/65ca63_b536077bdc99495ca651850cdaca0c92%7Emv2.png" type="image/png"/>
                <link rel="canonical" href="https://www.globalgovernanceinitiative.org/mission"/>
                <meta property="og:title" content="Mission | Global Governance Initiative"/>
                <meta property="og:description" content="Our mission is to democratize experiential&nbsp;education through young globally accomplished practitioners&nbsp;and unlock potential of the youth at grass root level.&nbsp;"/>
                <meta property="og:image" content="https://static.wixstatic.com/media/f7385c_30f5f1a667d24a7c8112b4a03168e15e%7Emv2.png/v1/fit/w_2500,h_1330,al_c/f7385c_30f5f1a667d24a7c8112b4a03168e15e%7Emv2.png"/> 
            
                <meta property="og:image:width" content="2500"/>
                <meta property="og:image:height" content="1330"/>
                <meta property="og:url" content="https://www.globalgovernanceinitiative.org/mission"/>
                <meta property="og:site_name" content="GGI"/>
                <meta property="og:type" content="website"/>
            </Head>
            <div className='mt-36 flex justify-center'>
                <div className='w-100 sm:w-3/4 md:w-1/2 lg:w-2/5'>
                    <video autoPlay={true} loop={true} controls={true} muted={true} width="100%" height="100%" >
                        <source src='/mission.mp4' />
                    </video>
                </div>
            </div>
            <p className='primary text-2xl sm:text-3xl  text-center mt-48 mb-24 font-serif font-bold' >
                OUR UNITED NATIONS SDG LED MISSION<br /> FOR BRINGING CHANGE
            </p>

            <Container>
                <p className='my-8'>
                    <span className='font-semibold'>Current models of higher education are broken and in urgent need of reform.</span> They are based on flawed “archaic” curriculums that seek to increase general knowledge but not expand thought leadership. As such, they don’t recognise the true nature of the challenges youth face in real-world, fail to tap our collective potential to address those challenges and offer static solutions to dynamic problems.
                </p>
                <p className='my-8'>
                    As a result, education institutes around the world are facing deficits in both effectiveness and legitimacy. A deficit of effectiveness because our models of education are ill-equipped to tackle some of the most urgent issues we face as a society. And a deficit of legitimacy because people feel increasingly disillusioned with education institutes and see it as irrelevant.
                </p>
                <p className='my-8'>
                    Making higher education more effective and legitimate requires more than simply changing processes and practices. We need a refreshed vision for education founded on a new set of beliefs, values, and principles. Hence, we at GGI believe the millennials are resilient, courageous to dream, live boldly and follow their passion to make this world a better place to live.
                </p>
                <p className='my-8'>
                    GGI was started in Jan 2019 with a dream to re-imagine and re-build higher education on impact topics to embrace youth in India and globally through interactive-agile Masterclasses and research-driven Fellowship programs. <span className='font-semibold'>Our mission and values are aligned with the United Nations  Sustainable Development Goals of achieving inclusive and quality education for all. We are focused to democratize experiential education</span> through young globally accomplished practitioners and unlock potential of the youth at the grassroots level. Global Governance Initiative through its collaborations and partners is mentoring young professionals like you to become well-rounded individuals who can think critically about issues from multiple perspectives, communicate effectively, and become ethical leaders with a commitment to sustainable development.
                </p>
                <p className='mt-8'>
                    We at GGI work closely with you to embrace a transformational approach aimed at benefiting all stakeholders-empowering you to learn, grow, build networks and drive positive societal impact. We will unlock your potential and make change happen through diverse, global Masterclass speakers who are passionate about delivering integrated Masterclasses through leading-edge <span className='font-semibold'> management consulting, development consulting and product management.</span>
                </p>
            </Container>
            <Heading>Frequently Asked Questions</Heading>
            <Accordion />
            <Footer />
        </>
    )
}

export default Mission