import profiles from '../profiles.json';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Container from '../../../components/global/Container'
function Popup({ currentProfile, setShowPopup }) {
  const router = useRouter();

  const category = router.query.category;
  const handleCloseClick = () => {
    setShowPopup(false);
    router.push(`/30-under-30/${category}`);
  };


  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          <div className="px-4 py-5 sm:p-6">
            <button className="absolute top-0 right-0 m-4 text-gray-700 hover:text-gray-900" onClick={handleCloseClick} >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M13.414 12l5.293-5.293a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 001.414 1.414L12 13.414l5.293 5.293a1 1 0 001.414-1.414L13.414 12z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className='grid grid-cols-2 gap-5'>
              <div>
                <img src="/hailey.jpg" alt="" />
              </div>
              <div>
                <h1 className='mt-4'>{currentProfile.name}</h1>
                <p>Age: {currentProfile.age}</p>
                <p>Occupation: {currentProfile.occupation}</p>
                <p>Location: {currentProfile.location}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}


export default function Category({ category }) {
  const router = useRouter();
  const categoryProfiles = profiles[category];
  const [showPopup, setShowPopup] = useState(false);
  const [currentProfile, setCurrentProfile] = useState({});

  useEffect(() => {
    if (router.query.profile) {
      setShowPopup(true);
      const profileName = router.query.profile;
      const currentProfile = categoryProfiles.find(
        profile => profile.name === profileName
      );
      setCurrentProfile(currentProfile);
    }
  }, [router.query.profile]);

  //to open popup with url parameters otherwise simple css would have worked
  function openPopup(profileName) {
    router.push(
      `/30-under-30/${category}?profile=${profileName}`,
      undefined,
      { shallow: true }
    );
    setShowPopup(true);
  }

  return (
    <>
      <Container>

        <div className='mt-48 grid grid-cols-2 gap-5'>
          <div>
            <h1 className='text-3xl'>{category}</h1>
            <p className='text-xl font-bold mt-8'>Creating and designing the future of fashion and the arts</p>
            <p className='text-xl mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

          </div>

          <img src="/hailey.jpg" alt="" />
        </div>

        <div className='my-36 grid grid-cols-2 md:grid-cols-4 gap-10'>
          {categoryProfiles.map(profile => (
            <div key={profile.name} className="hover:cursor-pointer">
              <a onClick={() => openPopup(profile.name)}>
                <img src='/16.jpg' alt='' className="hover:shadow-lg hover:shadow-blue-600 my-5" />
                {profile.name}</a>
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
