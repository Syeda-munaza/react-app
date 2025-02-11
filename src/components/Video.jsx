import React from "react";
import Reac from "../App.css";

const Video = ({ thumbnail, logo, title }) => {
  return (
    <div className="video-container">
      <div>
        <img src={thumbnail} alt="Thumbnail" className="img" />
      </div>
      <div className="video-info">
        <img src={logo} alt="Logo" className="logo" />
        <h2 className="text">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Video;
