import profiles from '../profiles.json';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Container from '../../../components/global/Container'
import Footer from '../../../components/global/Footer';
import Link from 'next/link';


// this is the popup component
function Popup({ currentProfile, setShowPopup }) {
  const handleCloseClick = () => {
    setShowPopup(false);
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl lg:max-w-5xl sm:w-full ">
          <div className="px-4 py-5 sm:p-6">
            <button className="absolute top-0 right-0 m-4 text-gray-700 hover:text-gray-900" onClick={handleCloseClick}>
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M13.414 12l5.293-5.293a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 001.414 1.414L12 13.414l5.293 5.293a1 1 0 001.414-1.414L13.414 12z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className='grid md:grid-cols-2 gap-5'>
              <div className="flex items-center  ">
                <div className="h-[300px] sm:h-[500px] w-full">
                  <img src={currentProfile.img} alt="" className="h-full w-full object-cover" />
                </div>
              </div>

              <div>
                <p className='font-bold text-black'>{currentProfile.age} | {currentProfile.occupation}</p>

                <h1 className='mt-1'>{currentProfile.name}</h1>
                {/* <p>Occupation: {currentProfile.occupation}</p> */}
                {/* <p>Location: {currentProfile.location}</p> */}
                <p dangerouslySetInnerHTML={{ __html: currentProfile.description }}></p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}


// this is the category page rendered dynamically
export default function Category({ category }) {
  const categoryProfiles = profiles[category].persons;//all the profiles are  stored here
  const [showPopup, setShowPopup] = useState(false);
  const [currentProfile, setCurrentProfile] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (router.query.profile) {
      setShowPopup(true);
      const profileName = router.query.profile;
      const currentProfile = categoryProfiles.find(
        profile => profile.name === profileName
      );
      setCurrentProfile(currentProfile);
      console.log("---------", currentProfile)
    }
  }, [router.query.profile]);

  //to open popup with url parameters otherwise simple css would have worked
  function openPopup(profileName) {
    setShowPopup(true);
    const currentProfile = categoryProfiles.find(
      profile => profile.name === profileName
    );
    setCurrentProfile(currentProfile);
  }

  return (
    <>
    {/* flex box  */}
      <div className='mt-36 w-11/12 mx-auto flex justify-center flex-wrap md:flex-nowrap flex-row gap-20'>
        <div className='md:min-w-1/2 md:max-w-3/5'> {/*change here*/}
          <Link href="/30-under-30">
            <img src="/30u30logo.png" alt="30-under-30" className="mx-auto h-20 md:h-32 mt-0 mb-12 hover:cursor-pointer hover-30" />
          </Link>
          <h1 className='uppercase roboto text-center text-6xl sm:text-8xl xl:text-9xl text-black'>{profiles[category].title}</h1>
          <p className='mt-12 text-center text-xl md:text-3xl'>{profiles[category].description}</p>
        </div>
        <div className='md:max-w-1/2'> {/*change here*/}
          <img src={categoryProfiles[0].img} alt="" className="h-full w-full object-cover hover:shadow-lg hover:shadow-[#FF7F50] my-5" />
          {categoryProfiles[0].name} for Global Governance Initiative 30 under 30
        </div>
      </div>

{/* grid  */}
      <Container>
        <div className='mt-36 mb-12 grid grid-cols-1 md:grid-cols-2 gap-10'>
          {categoryProfiles.map(profile => (
            <div key={profile.name} className="hover:cursor-pointer">
              <a onClick={() => openPopup(profile.name)}>
                <div className="h-[300px] md:h-[500px] w-full">
                  <img src={profile.img} alt="" className="h-full w-full object-cover hover:shadow-lg hover:shadow-[#FF7F50] my-5" />
                </div>
                <p className='text-center pt-4 uppercase text-black font-bold'>{profile.age} | {profile.occupation}</p>
                <p className='text-center text-3xl font-black tracking-widest font-serif text-black'> {profile.name}</p>
              </a>
            </div>
          ))}
        </div>

        {showPopup && (
          <Popup
            currentProfile={currentProfile}
            setShowPopup={setShowPopup}
          />
        )}
      </Container>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const categories = Object.keys(profiles);
  const paths = categories.map(category => ({
    params: { category },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const category = params.category;
  return { props: { category } };
}
