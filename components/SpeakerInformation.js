import React from "react";

function SpeakerInformation({ speaker }) {
  return (
    <div className="speaker-info">
      <div className="d-flex justify-content-center mb-3">
        <h3 className="text-truncate ">
          {speaker.first} {speaker.last}
        </h3>
      </div>
      <div>
        <p>{speaker.bio}</p>
        <div className="info-container">
          <div className="social social-media">
            <span className=" w-100 company">{speaker.company}</span>
          </div>
          <div className="social social-media">
            <span className=" w-100 twitter">{speaker.twitterHandle}</span>
          </div>
          <span>{speaker.favorite}</span>
        </div>
      </div>
      <div className="sessions-container ">
        <span className="session w-100">{speaker.sessions[0].title} </span>
        <div className="session w-100">
          <strong>Room: {speaker.sessions[0].room.name}</strong>
        </div>
      </div>
    </div>
  );
}

export default SpeakerInformation;
