import React from "react";
import Header from "../components/Header";
import SpeakersToolbar from "../components/SpeakersToolbar";
import SpeakersList from "../components/Speakers/SpeakersList";

function IndexPage() {
  return (
    <div>
      <Header />
      <SpeakersToolbar />
      <div className="container speakers-list">
        <SpeakersList />
      </div>
    </div>
  );
}

export default IndexPage;
