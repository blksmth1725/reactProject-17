import React from "react";
import SpeakerCard from "../components/SpeakerCard";
import { data } from "../utils/SpeakerData";

function IndexPage() {
  return (
    <div className="container speakers-list">
      <div className="row">
        {data.map((speaker) => {
          return <SpeakerCard speaker={speaker} />;
        })}
      </div>
    </div>
  );
}

export default IndexPage;
