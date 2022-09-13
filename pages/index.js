import React from "react";
import { data } from "../utils/SpeakerData";

function IndexPage() {
  return (
    <div className="container speakers-list">
      <div className="row">
        {data.map((speaker) => {
          const {
            id,
            bio,
            first,
            last,
            favorite,
            twitterHandle,
            company,
            sessions,
          } = speaker;
          return (
            <div
              key={id}
              className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12 mt-3"
            >
              <div className="speaker-image d-flex flex-row justify-content-center align-items-center h-300 ">
                <img
                  className="contain-fit"
                  src={`/images/speaker-${id}.jpg`}
                  width="300"
                  height="250"
                  alt={`${first} ${last}`}
                />
              </div>
              <div className="speaker-info">
                <div className="d-flex justify-content-center mb-3">
                  <h3 className="text-truncate ">
                    {first} {last}
                  </h3>
                </div>
                <div>
                  <p>{bio}</p>
                  <div className="info-container">
                    <span className="session w-100">{company}</span>
                    <span className="session w-100">{twitterHandle}</span>
                    <span>{favorite}</span>
                  </div>
                </div>
                <div className="sessions-container ">
                  <span className="session w-100">{sessions[0].title} </span>
                  <div className="session w-100">
                    <strong>Room: {sessions[0].room.name}</strong>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default IndexPage;
