import "./App.css";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import Showreel from "./components/Showreel";
import Work from "./components/work";
import Services from "./components/Services";

function App() {
  return (
    <main className="app">
      <CustomCursor />
      <nav className="navbar">
        <div className="logo">
          YOUR<span>STUDIO</span>
        </div>

        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#showreel">Showreel</a>
          <a href="#about">About</a>
        </div>

        <a href="#contact" className="nav-cta">
          Start a project
        </a>
      </nav>

      <Hero />

      <Showreel />

      <Work />

      <Services />
    </main>
  );
}

export default App;