import React from "react";
import SpeakerImage from "./SpeakerImage";
import SpeakerInformation from "./SpeakerInformation";

function SpeakerCard({ speaker }) {
  return (
    <div key={speaker.id} className=" card-container">
      <SpeakerImage speaker={speaker} />
      <SpeakerInformation speaker={speaker} />
    </div>
  );
}

export default SpeakerCard;
