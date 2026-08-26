function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-top hero-animate hero-delay-1">
        <span>01 / CREATIVE MOTION STUDIO</span>
        <span>BASED IN INDIA / WORKING WORLDWIDE</span>
      </div>

      <div className="hero-content">
        <div className="hero-label hero-animate hero-delay-2">
          MOTION / EDITING / DESIGN / 3D / VFX
        </div>

        <h1>
          <span className="hero-title-line hero-animate hero-delay-3">
            WE MAKE
          </span>

          <span className="hero-title-line hero-animate hero-delay-4">
            <i>THINGS MOVE.</i>
          </span>
        </h1>

        <p className="hero-description hero-animate hero-delay-5">
          We create motion, films, visual identities and digital
          experiences that make brands impossible to ignore.
        </p>

        <a
          href="#contact"
          className="hero-cta hero-animate hero-delay-6"
        >
          START A PROJECT
          <span>↗</span>
        </a>
      </div>

      <div className="hero-footer hero-animate hero-delay-7">
        <span>SCROLL TO EXPLORE</span>
        <span>EST. 2026</span>
      </div>
    </section>
  );
}

export default Hero;