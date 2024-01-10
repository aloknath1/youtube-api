import React from 'react';
export default function Video(){
    return (
      <div className="video">
        <video width="1000" height="1000" className="video-widget" controls>
          <source src="./assets/video.mp4" type="video/mp4" />         
          Your browser does not support the video tag.
        </video>
        <div className="video-details">
          <h2 className="video-details-title">Playlist 1</h2>
        </div>
      </div>
    );
   }
