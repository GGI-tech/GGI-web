import React from "react";
import PropTypes from "prop-types";

import { render } from "react-dom";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const YoutubeEmbed = ({ embedId,autoplay=0 }) => (
  // <LiteYouTubeEmbed 
  //       id={embedId}
  //       title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
  //   />
  <div className="p-4 mt-4 md:mb-4 flex justify-center">
    <iframe
      src={`https://www.youtube.com/embed/${embedId}?autoplay=${autoplay};&mute=1`}
      frameBorder="0"
      align="center"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;