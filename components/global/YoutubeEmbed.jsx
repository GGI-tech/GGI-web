import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId,autoplay }) => (
  <div className="p-4 flex justify-center">
    <iframe
      width={480}
      height={270}
      src={`https://www.youtube.com/embed/${embedId}?autoplay=${autoplay}`}
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