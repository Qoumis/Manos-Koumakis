import "./App.css";
import Hero from "./sections/Hero/Hero";
import NavBar from "./sections/Header/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <h2>Work Experience</h2>
      <h2 id="skills">Education</h2>
      <h2>Publications</h2>
      <h2>Primary Skills</h2>
      <h2 id="projects">Projects</h2>
    </>
  );
}

export default App;
