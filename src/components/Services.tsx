import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "./TextReveal";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "MOTION",
    description:
      "Bring ideas to life with motion graphics built to capture attention, explain ideas and make brands memorable.",
    tags: "2D / 3D / KINETIC TYPE",
  },
  {
    number: "02",
    title: "VIDEO",
    description:
      "Turn raw footage into sharp, cinematic content with editing, pacing, sound design and color that keep people watching.",
    tags: "EDITING / COLOR / SOUND",
  },
  {
    number: "03",
    title: "3D + VFX",
    description:
      "Create visuals that don't exist yet. Product animation, environments, simulations and visual effects built around your idea.",
    tags: "BLENDER / VFX / CGI",
  },
  {
    number: "04",
    title: "DESIGN",
    description:
      "Posters, campaigns and digital visuals designed to make your brand stand out before anyone reads a single word.",
    tags: "POSTERS / CAMPAIGNS / SOCIAL",
  },
];

function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".services-title", {
        scrollTrigger: {
          trigger: ".services",
          start: "top 75%",
        },
        y: 70,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(".service-row", {
        scrollTrigger: {
          trigger: ".services-list",
          start: "top 80%",
        },
        y: 70,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power4.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="services" id="services">
      <div className="services-heading">
        <span>02 / WHAT WE DO</span>
        <span>CREATIVE PRODUCTION</span>
      </div>

     <TextReveal className="services-title">
  <span>
    WE MAKE
    <br />
    <i>ATTENTION</i>.
  </span>
</TextReveal>

      <div className="services-list">
        {services.map((service) => (
          <div className="service-row" key={service.number}>
            <span className="service-number">{service.number}</span>

            <div className="service-main">
              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <span className="service-tags">{service.tags}</span>
            </div>

            <span className="service-arrow">↗</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;