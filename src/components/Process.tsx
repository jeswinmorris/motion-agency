import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "./TextReveal";
gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "TELL US THE IDEA",
    description:
      "Send us your brief, reference, rough idea or even just a sentence. You don't need everything figured out.",
  },
  {
    number: "02",
    title: "WE BUILD THE DIRECTION",
    description:
      "We shape the concept, visual language and production approach around what you actually need.",
  },
  {
    number: "03",
    title: "WE MAKE IT MOVE",
    description:
      "Design, animation, editing, 3D, VFX and sound come together to create the final piece.",
  },
  {
    number: "04",
    title: "YOU GET THE FINISHED WORK",
    description:
      "After review and refinements, you receive polished assets ready for your campaign, platform or launch.",
  },
];

function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-title", {
        scrollTrigger: {
          trigger: ".process",
          start: "top 75%",
        },
        y: 70,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(".process-step", {
        scrollTrigger: {
          trigger: ".process-steps",
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power4.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="process">
      <div className="process-heading">
        <span>05 / PROCESS</span>
        <span>FROM IDEA TO FINAL</span>
      </div>

      <div className="process-title">
        <TextReveal>
          <h2>
            SIMPLE.
            <br />
            <i>DIRECT.</i>
            <br />
          NO BS.
        </h2>
        </TextReveal>

        <p>
          A clear creative process designed to keep your project moving
          without unnecessary meetings, confusion or endless back-and-forth.
        </p>
      </div>

      <div className="process-steps">
        {steps.map((step) => (
          <div className="process-step" key={step.number}>
            <span className="process-number">{step.number}</span>

            <div className="process-step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>

            <span className="process-arrow">↗</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;