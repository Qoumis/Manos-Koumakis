import "./App.css";
import Hero from "./sections/Hero/Hero";
import NavBar from "./sections/Header/Navbar";
import Work from "./sections/Work/Work";
import Education from "./sections/Education/Education";
import Publications from "./sections/Publications/Publications";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import VideoModal from "./Modal/VideoModal";

import { useState } from "react";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      <NavBar />
      <Hero />
      <Work />
      <Education />
      <Skills />
      <Publications />
      <Projects click={setSelectedVideo} />

      {/* Conditionally render the VideoModal */}
      {selectedVideo && (
        <VideoModal
          url={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </>
  );
}

export default App;
