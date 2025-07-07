import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const InstagramEmbed = ({ postUrl }) => {
  const [width, setWidth] = useState("300");
  const [height, setHeight] = useState("400");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDesktop = window.innerWidth > 768;
      setWidth(isDesktop ? "440" : "300");
      setHeight(isDesktop ? "500" : "400");
    }
  }, []);

  return (
    <div className="p-2 mt-12 md:mb-4 flex justify-center">
      <iframe
        src={`${postUrl}embed`}
        width={width}
        height={height}
        frameBorder="0"
        scrolling="no"
        allowTransparency="true"
        allow="encrypted-media"
        title="Instagram Post"
      ></iframe>
    </div>
  );
};

InstagramEmbed.propTypes = {
  postUrl: PropTypes.string.isRequired, // example: "https://www.instagram.com/p/POST_ID/"
};

export default InstagramEmbed;
