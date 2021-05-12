import React from "react";
import "./App.css";
import "./index.css";
import {
  BannerSection,
  NavbarSection,
  ArtistSection,
  FeedbackSection,
  CircleCardSection,
} from "./Sections";

function App() {
  return (
    <div className="app">
      <div className="app__banner">
        <NavbarSection />
        <div className="max-w-7xl p-4 flex flex-col justify-between w-full mx-auto">
          <BannerSection />
          <CircleCardSection />
        </div>
      </div>
      <div className="app__contents p-4">
        <ArtistSection />
        <FeedbackSection />
      </div>
    </div>
  );
}

export default App;
