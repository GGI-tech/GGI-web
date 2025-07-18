import Accordion from "../global/Accordian"
import Button from "../global/Button"
import Container from "../global/Container"
import Footer from "../global/Footer"
import Heading from "../global/Heading"
import Partners from "../global/Partners"

import teachforindia from '../../public/teachforindia.jpg'
import pratham from '../../public/pratham.jpg'
import goonj from '../../public/goonj.jpg'
import caspr from '../../public/caspr.jpg'
import gobarefoot from '../../public/gobarefoot.jpg'
import stir from '../../public/stir.jpg'
import visionunlimited from '../../public/visionunlimited.jpg'
import udaan from '../../public/udaan.jpg'
import bhumi from '../../public/bhumi.jpg'
import Slides from "../global/Slides"
import YoutubeEmbed from "../global/YoutubeEmbed"

const ImpactLab = () => {
    const data=[
        {
            "image":'/impactlab1.jpg',
            "review":`<span class='text-2xl font-semibold'>WELCOME<br> TO <br> GGI IMPACT LAB</span>`
        },
        {
            "image":'/impactlab2.jpg',
            "review":"In order to make the education ecosystem more inclusive and course content more relevant for the students. <br><br><span class='font-bold'>GGI has launched the GGI Impact Lab.</span> "
        },

        {
            "image":'/impactlab3.jpg',
            "review":`
            <span class='font-bold'>The outstanding Lab performers will be rewarded with</span><br><br>
            - Exclusive mentorship by the GGI Co Founders<br>
            ​
            - Eligibility to work on live projects with partner companies<br>
            ​
            - Letter of recommendations<br>
             
            - Eligibility to become a regional head.`
        }
    ]

    return (
        <>

            <Container>
                <Slides slides={data}/>

                <Heading margin={2}>Why  GGI Impact Lab </Heading>
                <p className="mb-5">India students lost their hold on education due to coronavirus lockdown due to lack of IT infrastructure, teacher training etc.</p>
                <p className="mb-5">These testing times will create a shift from investing to &apos;impact&apos; investing, from growth to &apos;inclusive&apos; growth, from innovation to &apos;inclusive&apos; innovation.</p>
                <p className="mb-5">In order to make the education ecosystem more inclusive and course content more relevant for the college students - GGI has launched the GGI Impact Lab. GGI impact labs, President Program is created in higher education institutes-  If you are a current student of any of these colleges, and interested in leading the GGI impact Lab as the President, please apply.  </p>
                <p className="mb-5">Please note GGI Impact Lab, Young Leaders Program is our separate upskilling transformational program (details of which are on the home page)</p>

                <Button>Apply Now</Button>

                <Heading margin={2}>About GGI Impact Lab </Heading>
                <p className="mb-5">GGI Impact Lab is the flagship change makers program of Global Governance Initiative and pro bono development consulting arm of GGI, where undergraduate college students across the world curate, design, and implement cutting-edge impactful projects. around school education.  </p>
                <p className="mb-5">We have today created a high-quality ecosystem of leading NGOs and Centre Government&apos;s being advised by top GGI Labs thereby bringing synergies between NGOs, creating a transformational impact in the school education ecosystem.  </p>

                <Heading margin={2}> ORGANIZATIONS IMPACTED </Heading>
                <p>Our working members have designed their own projects in the Impact Lab. With the Impact Lab&apos;s support, they are launching these projects at their institutes on topics such as enhancing the quality of school teacher digital training in India, increasing the foothold of after-school clubs, transforming NGO volunteer strategy, expanding services portfolio and enhancing the digital footprint of school NGOs to raise retail funding by working with below-mentioned clients. </p>
            </Container>
            <Partners companies={[teachforindia, pratham, goonj, caspr, gobarefoot, stir, visionunlimited, udaan, bhumi]} />
            
            <div className='mt-48'>
                <YoutubeEmbed embedId='DXHPoAPXQQc' autoplay={1}/>
            </div>
            <Heading margin={2}>Frequently Asked Questions</Heading>
            <Accordion />
            <Footer />
        </>
    )
}

export default ImpactLab