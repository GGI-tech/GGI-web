import React from "react";
import PropTypes from "prop-types";
// import LazyLoad from 'react-lazyload';
import YouTube from 'react-youtube';

const YoutubeEmbed = ({ embedId, autoplay = 0 }) => {
  let width = '300';
  let height = '200';
  let isDesktop=false;
  if (typeof window !== 'undefined') {
    isDesktop = window.innerWidth > 768;
    width = isDesktop ? '440' : '300';
    height = isDesktop ? '250' : '200';
  }
 
  const opts = {
    height,
    width,
    playerVars: {
      autoplay: autoplay,
      mute: 1
    },
  };
  const onReady = (event) => {
    if (!isDesktop && autoplay) {
      event.target.playVideo();
    }
  };

  return (
    // <div className="p-4 mt-4 md:mb-4 flex justify-center">
    //   <iframe
    //     loading="lazy"
    //     src={`https://www.youtube.com/embed/${embedId}?autoplay=${autoplay};&mute=1`}
    //     frameBorder="0"
    //     align="center"
    //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //     allowFullScreen
    //   />
    // </div>
    // <LazyLoad>
    <div className="p-2 mt-12 md:mb-4 flex justify-center">
      <div >
        <YouTube
          videoId={embedId}
          opts={opts}
          onReady={onReady}

        />
      </div>
    </div>
    // </LazyLoad>

  );
}

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;



