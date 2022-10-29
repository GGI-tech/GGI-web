import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <div className="contain">
    <div className="ytcontainer">
      <iframe
        className="responsive-iframe"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        align="center"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen

      />
    </div>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;