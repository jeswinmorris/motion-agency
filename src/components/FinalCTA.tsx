import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "./TextReveal";
import Magnetic from "./Magnetic";

gsap.registerPlugin(ScrollTrigger);

function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".final-cta-content", {
        scrollTrigger: {
          trigger: ".final-cta",
          start: "top 75%",
        },
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="final-cta">
      <div className="final-cta-top">
        <span>07 / LET'S WORK</span>
        <span>READY WHEN YOU ARE</span>
      </div>

      <div className="final-cta-content">
        <p>HAVE SOMETHING WORTH MAKING?</p>
<TextReveal>
        <h2>
          LET'S MAKE
          <br />
          IT <i>MOVE.</i>
        </h2>
</TextReveal>
       <Magnetic>
  <button className="hero-cta">
    START A PROJECT <span>↗</span>
  </button>
</Magnetic>
      </div>

      <div className="final-cta-bottom">
        <span>CREATIVE MOTION STUDIO</span>
        <span>INDIA / WORLDWIDE</span>
      </div>
    </section>
  );
}

export default FinalCTA;