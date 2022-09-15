import React from "react";
import SpeakerCard from "./SpeakerCard";
import { data } from "../../utils/SpeakerData";

function SpeakersList() {
  return (
    <div className="speakers-list-card-container">
      {data.map((speaker) => {
        return <SpeakerCard speaker={speaker} />;
      })}
    </div>
  );
}

export default SpeakersList;
