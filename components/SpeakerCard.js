import React from "react";
import SpeakerImage from "./SpeakerImage";
import SpeakerInformation from "./SpeakerInformation";

function SpeakerCard({ speaker }) {
  return (
    <div
      key={speaker.id}
      className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-1"
    >
      <SpeakerImage speaker={speaker} />
      <SpeakerInformation speaker={speaker} />
    </div>
  );
}

export default SpeakerCard;
