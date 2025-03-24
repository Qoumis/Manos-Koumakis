import "./App.css";
import Hero from "./sections/Hero/Hero";
import NavBar from "./sections/Header/Navbar";
import Work from "./sections/Work/Work";
import Education from "./sections/Education/Education";
import Publications from "./sections/Publications/Publications";
import Skills from "./sections/Skills/Skills";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Work />
      <Education />
      <Skills />
      <Publications />
      <h2 id="projects">Projects</h2>
    </>
  );
}

export default App;
