import "./App.css";
import Hero from "./sections/Hero/Hero";
import NavBar from "./sections/Header/Navbar";
import Work from "./sections/Work/Work";
import Education from "./sections/Education/Education";
import Publications from "./sections/Publications/Publications";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Work />
      <Education />
      <Publications />
      <h2>Primary Skills</h2>
      <h2 id="projects">Projects</h2>
    </>
  );
}

export default App;
