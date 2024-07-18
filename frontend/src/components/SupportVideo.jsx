import React from 'react';
import './componentCSS/SupportVideo.css';

const SupportVideo = () => {
  return (
    <div className="video-container">
      <h2>Support for Women in Farming</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/rpry_aZWuWk?si=P3Z5UCq0a1t8q3Wz"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default SupportVideo;
