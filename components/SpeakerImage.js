import React from "react";

function SpeakerImage({ speaker }) {
  return (
    <div className="speaker-image d-flex flex-row justify-content-center align-items-center h-300 ">
      <img
        className="contain-fit"
        src={`/images/speaker-${speaker.id}.jpg`}
        width="300"
        height="250"
        alt={`${speaker.first} ${speaker.last}`}
      />
    </div>
  );
}

export default SpeakerImage;
