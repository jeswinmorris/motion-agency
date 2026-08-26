import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "./TextReveal";

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    number: "01",
    title: "BUILT AROUND THE IDEA",
    text: "We start with the idea, not the effect. Every visual decision exists to make the concept stronger.",
  },
  {
    number: "02",
    title: "DETAIL MATTERS",
    text: "Timing, typography, transitions, sound and tiny visual details turn good content into work people remember.",
  },
  {
    number: "03",
    title: "MADE TO PERFORM",
    text: "Beautiful is the baseline. We create content designed for real campaigns, platforms and audiences.",
  },
];

function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-intro", {
        scrollTrigger: {
          trigger: ".about",
          start: "top 75%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(".principle", {
        scrollTrigger: {
          trigger: ".principles",
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power4.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="about" id="about">
      <div className="about-heading">
        <span>04 / ABOUT</span>
        <span>HOW WE THINK</span>
      </div>

      <div className="about-intro">
       <TextReveal>
  <h2>
    GOOD DESIGN
    <br />
    GETS <i>SEEN.</i>
    <br />
    GREAT DESIGN
    <br />
    GETS <i>REMEMBERED.</i>
  </h2>
</TextReveal>

        <p>
          We are a creative production studio focused on motion, video,
          design and visual storytelling. We turn ideas into visuals that
          demand attention.
        </p>
      </div>

      <div className="principles">
        {principles.map((principle) => (
          <div className="principle" key={principle.number}>
            <span className="principle-number">{principle.number}</span>

            <div className="principle-content">
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </div>

            <span className="principle-arrow">↗</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;