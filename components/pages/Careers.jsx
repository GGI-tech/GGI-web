import Heading from '../global/Heading';
import Accordion from '../global/Accordian';
import Container from '../global/Container';
import Hero from '../global/Hero'
import Button from '../global/Button';
import Footer from '../global/Footer';

const Careers = () => {
    return (
        <>
            <Hero key={1} heading='WELCOME TO YOUR<br> GGI CAREER' message='Make your own GGI' image={'/careers.jpg'} />

            <h2 className='text-3xl mt-24 mb-12 text-black'>A Career that fits your calling</h2>
            <Container>
                <p>At GGI, we grow, lead, and innovate. You&#39;ll thrive in an environment that encourages creative thinking, collaboration, individuality, and diversity. When it comes to solving society&#39;s biggest problems, anything is possible at GGI. Join us in driving meaningful action for the world. </p>
                <p>Whether you&#39;re an experienced professional or a recent graduate, working with Global Governance Initiative could be a challenging and rewarding next step in your career. </p>
                <Button url="https://docs.google.com/forms/d/e/1FAIpQLSd-XGqHTbuUI8vYH-TvHFd1vEW5F_ZnFFXTKoI5WKQZH6ijaQ/viewform">Apply Now</Button>

            </Container>
            <h2 className='text-3xl mt-60 mb-12 text-black'>GGI Software Development Manager (SDM) Program</h2>
            <Container>
                <p>Apply for our unique SDM Program to hone your tech skills to build the world&#39;s most innovative tech products at the intersection of learning, and ethical behavior.  You need to be a full stack developer to apply to our SDM Program </p>
                <Button url="https://docs.google.com/forms/d/e/1FAIpQLSeHaPBwWswup97FgR3eLDjPqDzpMFvE7qgUSsS4zre-b_uKbQ/viewform">Apply for GGI SDM Program</Button>
                <p className='mt-24'><span className='font-semibold'>Fun Fact -</span> If you work at Global Governance Initiative for 2 years and decide to leave it to start a new company. We will be your first investor - guaranteed.</p>
            </Container>
            <Heading>Frequently Asked Questions</Heading>
            <Accordion />

            <Footer/>

        </>
    )
}

export default Careers