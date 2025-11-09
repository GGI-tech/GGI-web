import Hero from "../global/Hero";
import Image from "next/image";
import YouTubeEmbed from "../global/YoutubeEmbed";
import Footer from "../global/Footer";
import Accordion from "../global/Accordian";
import Heading from "../global/Heading";
import SlidingHero from "../global/SlidingHero";
import Container from '../global/Container'
import Button from "../global/Button";

const GGILife = () => {
  return (
    <>
      {/* Hero Section */}
      {/* <Hero image="/life-at-ggi.jpg" altText="Life at GGI" />
      
      <div className="primary text-3xl md:text-4xl mt-[10vw] text-center mb-12 font-serif font-bold">
        WELCOME TO LIFE AT GGI
      </div>

      <p className="text-center md:text-lg text-black font-serif my-12 px-6">
        At Global Governance Initiative, we foster a culture of learning, collaboration, and real-world impact.
        Our fellows engage in transformative experiences that shape their careers in public policy, consulting, 
        and leadership. Welcome to a vibrant, diverse, and intellectually stimulating community.
      </p> */}
      <div className='mt-10'></div>

      {/* Hero Banner Like Fellowship Page */}
      <div className="mt-36 w-full">
  <SlidingHero
      image="life-at-ggi.jpg"
    title={[
      `<div class='text-center text-white w-full'>
        <h4 class='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 w-full'>
          Life at Global Governance Initiative: Where Leaders Learn, Grow, and Thrive
        </h4>
      </div>`
    ]}
  />
</div>


      {/* <SlidingHero
        image={'/life-at-ggi.jpg'} // Replace with a banner image you like
        title={[
          `<div class='text-center text-white'>
      <h20 class='text-3xl sm:text-4xl md:text-5xl font-bold mb-4'>
        Life at Global Governance Initiative: Where Leaders Learn, Grow, and Thrive
      </h20>
      <br/>
      <p class='text-lg sm:text-xl -medium text-gray-100'>
        Join a vibrant global community of changemakers, innovators, and future leaders. Experience the GGI difference
      </p>
    </div>`
        ]}
      /> */}

      <section className="mt-[24px] text-center px-6">
        <h2 className="text-4xl mt-36 mb-10 text-red-700">Life at GGI</h2>
        <Container>
        <p className='mb-5 mt-12'>Global Governance Initiative: More Than a Learning Platform Global Governance Initiative (GGI) is more than an educational platform; it is a global community where individuals from diverse cultures, nationalities, and professional backgrounds come together to <span className="font-bold text-black">learn, collaborate, and drive impact.</span> Connected by their shared passion for creating change, our members are enriched by their unique perspectives and experiences.</p>
        </Container>
      </section>

       {/* Video Section */}
      <YouTubeEmbed embedId="O_PC43if0KE" autoplay={true} />

      <section className="mt-[12px] text-center px-6">
      <h2 className="text-4xl mt-36 mb-10 text-red-700">Belonging at GGI</h2>
        <Container>
        <p className='mb-5 mt-12'>At GGI, we believe that <span className="font-bold text-black">diversity is our strength.</span> Our community members bring a wide range of talents, interests, and aspirations, united by a common goal: to solve the world&apos;s most pressing challenges through innovative thinking, leadership, and collaboration. Whether you&apos;re a consultant, policymaker, entrepreneur, or aspiring leader, GGI provides the tools, network, and opportunities to help you thrive. We celebrate our global roots and the vibrant communities we serve. From the bustling streets of New Delhi to the innovation hubs of San Francisco, GGI&apos;s impact spans continents, empowering individuals to lead with purpose, drive change, and build a more inclusive and sustainable future for all.</p>
        </Container>
      </section>
      {/* Video Section */}
      <YouTubeEmbed embedId="lNS7Z_EGQ3Y" autoplay={true} />
      {/* Student Experience Sections */}
      <section className="mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <Image src="/sample-campus.jpg" alt="Campus Life" width={400} height={250} className="rounded-lg" />
          <h3 className="mt-4 text-xl font-bold text-gray-900">Dynamic Learning Environment</h3>
          <p className="text-gray-700 mt-2">
            Learn from world-class mentors through interactive masterclasses and real-world case studies.
          </p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <Image src="/global-networking.jpg" alt="Networking" width={400} height={250} className="rounded-lg" />
          <h3 className="mt-4 text-xl font-bold text-gray-900">Global Networking</h3>
          <p className="text-gray-700 mt-2">
            Connect with policy leaders, consultants, and entrepreneurs from around the world.
          </p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg">
          <Image src="/sample-arts.png" alt="Social Impact" width={400} height={250} className="rounded-lg" />
          <h3 className="mt-4 text-xl font-bold text-gray-900">Real-World Impact</h3>
          <p className="text-gray-700 mt-2">
            Work on live projects that shape policy, governance, and development on a global scale.
          </p>
        </div>
      </section>
      <section className="mt-[12px] text-center px-6">
      <h2 className="text-4xl mt-36 mb-10 text-red-700">Learning at GGI</h2>
        <Container>
        <p className='mb-5 mt-12'>Learning at GGI is transformative. Our <span className="font-bold text-black">case-based curriculum,</span> taught by top CXOs and Ivy League alumni, prepares you to tackle real-world challenges. Whether it&apos;s through masterclasses, peer projects, or AI-driven simulations, you&apos;ll gain the skills to lead in a complex world.</p>
        </Container>
      </section>

      {/* Video Section */}
      <YouTubeEmbed embedId="GlZLrrIMvOQ" autoplay={true} />

      <section className="mt-[12px] text-center px-6">
      <h2 className="text-4xl mt-36 mb-10 text-red-700">Life Beyond Classroom</h2>
        <Container>
        <p className='mb-5 mt-12'>Life at GGI is about more than just academics. It&apos;s about <span className="font-bold text-black">building lifelong friendships, exploring new perspectives,</span> and creating memories that last a lifetime.</p>
        </Container>
      </section>

      {/* Video Section */}
      <YouTubeEmbed embedId="VU2gyZnKkbU" autoplay={true} />

      {/* Testimonials Section */}

      <section className="mt-[12px] text-center px-6">
      <h2 className="text-4xl mt-36 mb-10 text-red-700">Join the GGI Family</h2>
        <Container>
        <p className='mb-5 mt-12'>Ready to <span className="font-bold text-black">transform your career and join a global community of leaders</span>? Apply to GGI today and take the first step toward a brighter future.</p>
        <Button page="fellowship" url="https://docs.google.com/forms/d/e/1FAIpQLSc0EdeZhxI2OeI5mh8HSUl4ScxHJ56XmvW48bcVzEA2MzZwTw/viewform"> APPLY NOW</Button>

        </Container>
      </section>

        {/* Video Section */}
       <YouTubeEmbed embedId="x4tjqNvIj9g" autoplay={true} />

      {/* FAQs Section */}
      <Heading>Frequently Asked Questions</Heading>
      <Accordion />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default GGILife;
