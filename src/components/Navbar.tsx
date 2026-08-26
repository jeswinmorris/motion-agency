import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 50);

      if (currentScroll > lastScroll && currentScroll > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`navbar ${
          scrolled ? "navbar-scrolled" : ""
        } ${hidden ? "navbar-hidden" : ""}`}
      >
        <a href="#" className="logo" onClick={closeMenu}>
          CORTISOL<span>STUDIO</span>
        </a>

        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
        </div>

        <a href="#project" className="nav-cta">
          Start a project
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
      </nav>

      <div
        className={`mobile-menu ${
          menuOpen ? "mobile-menu-open" : ""
        }`}
      >
        <a href="#work" onClick={closeMenu}>
          WORK
        </a>

        <a href="#services" onClick={closeMenu}>
          SERVICES
        </a>

        <a href="#about" onClick={closeMenu}>
          ABOUT
        </a>

        <a href="#project" onClick={closeMenu}>
          START A PROJECT ↗
        </a>
      </div>
    </>
  );
}

export default Navbar;