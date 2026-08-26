import "./App.css";

import CustomCursor from "./components/CustomCursor";
import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showreel from "./components/Showreel";
import Work from "./components/Work";
import Services from "./components/Services";
import Process from "./components/Process";
import About from "./components/About";
import FinalCTA from "./components/FinalCTA";
import ProjectForm from "./components/ProjectForm";

function App() {
  return (
    <main className="app">
      <SmoothScroll />
      <CustomCursor />

      <Navbar />

      <Hero />
      <Showreel />
      <Work />
      <Services />
      <Process />
      <About />
      <FinalCTA />
      <ProjectForm />
    </main>
  );
}

export default App;