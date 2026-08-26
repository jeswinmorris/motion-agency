import { useRef } from "react";

function Showreel() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
  };

  return (
    <section className="showreel" id="showreel">
      <div className="showreel-header">
        <span>02 / SHOWREEL</span>
        <span>SELECTED MOTION / 2026</span>
      </div>

      <div
        className="showreel-media"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=2000&q=85"
        >
          <source src="/videos/showreel.mp4" type="video/mp4" />
        </video>

        <div className="showreel-placeholder">
          <span>SHOWREEL</span>
          <span>2026</span>
        </div>

          <div className="showreel-play">
            <span>PLAY</span>
            <span>↗</span>
          </div>
        </div>

      <div className="showreel-footer">
        <span>MOTION / EDITING / 3D / VFX / DESIGN</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  );
}

export default Showreel;