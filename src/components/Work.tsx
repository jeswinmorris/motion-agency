import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "NOIR / VISUAL SYSTEM",
    category: "BRAND FILM / MOTION",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1800&q=85",
    video: "/videos/project-01.mp4",
    description:
      "A cinematic brand film created to turn a visual identity into movement, atmosphere, and a memorable digital experience.",
    services: [
      "Creative Direction",
      "Motion Design",
      "Video Editing",
      "Sound Design",
    ],
  },

  {
    number: "02",
    title: "FORM / FUTURE",
    category: "3D / CGI / VFX",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1800&q=85",
    video: "/videos/project-02.mp4",
    description:
      "An experimental CGI campaign combining 3D design, lighting, visual effects, and animation to create a distinctive product world.",
    services: [
      "3D Design",
      "CGI Animation",
      "VFX",
      "Compositing",
    ],
  },

  {
    number: "03",
    title: "FRAME / FREQUENCY",
    category: "CAMPAIGN / EDITING",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=85",
    video: "/videos/project-03.mp4",
    description:
      "A high-energy campaign built for digital attention, combining sharp editing, motion graphics, color, and platform-ready content.",
    services: [
      "Video Editing",
      "Motion Graphics",
      "Color Grading",
      "Social Content",
    ],
  },

  {
    number: "04",
    title: "PULSE / LAUNCH",
    category: "PRODUCT / CAMPAIGN",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1800&q=85",
    video: "/videos/project-04.mp4",
    description:
      "A launch campaign designed to introduce a product with bold visuals, fast-paced storytelling, and a cohesive motion language.",
    services: [
      "Campaign Direction",
      "Motion Graphics",
      "Editing",
      "Social Ads",
    ],
  },

  {
    number: "05",
    title: "ECHO / IDENTITY",
    category: "BRAND / TITLE DESIGN",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1550747545-c896b7033f0f?auto=format&fit=crop&w=1800&q=85",
    video: "/videos/project-05.mp4",
    description:
      "A motion identity system built to give a modern brand a recognizable visual rhythm across video, digital, and social.",
    services: [
      "Brand Motion",
      "Title Design",
      "Animation",
      "Visual Identity",
    ],
  },

  {
    number: "06",
    title: "VOID / DISTRICT",
    category: "EXPERIMENTAL / ART",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=85",
    video: "/videos/project-06.mp4",
    description:
      "An experimental visual study exploring atmosphere, typography, movement, and sound through a highly stylized visual language.",
    services: [
      "Art Direction",
      "Experimental Motion",
      "Typography",
      "Sound Design",
    ],
  },
];
function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".work-heading", {
        scrollTrigger: {
          trigger: ".work",
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: ".projects",
          start: "top 80%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (!selectedProject) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <>
      <section ref={sectionRef} className="work" id="work">
        <div className="work-heading">
          <span>03 / SELECTED WORK</span>
          <span>THINGS WE'VE MADE MOVE</span>
        </div>

        <div className="work-title">
          <h2>
            WORK THAT
            <br />
            <i>GETS NOTICED.</i>
          </h2>

          <p>
            From high-impact brand films to scroll-stopping social content,
            we create visual work designed to make people stop and look.
          </p>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-meta">
                <span>{project.number}</span>
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>

              <button
                className="project-media"
                onClick={() => setSelectedProject(project)}
                aria-label={`View ${project.title}`}
              >
                <img src={project.image} alt={project.title} />

                <div className="project-overlay">
                  <span>VIEW PROJECT</span>
                  <span>↗</span>
                </div>
              </button>

              <div className="project-info">
                <h3>{project.title}</h3>

                <span>{project.category}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {selectedProject && (
        <div className="case-study">
          <button
            className="case-study-close"
            onClick={() => setSelectedProject(null)}
          >
            CLOSE <span>×</span>
          </button>

          <div className="case-study-content">
            <div className="case-study-header">
              <span>{selectedProject.number}</span>

              <span>{selectedProject.category}</span>

              <span>{selectedProject.year}</span>
            </div>

            <h2>
              {selectedProject.title}
            </h2>

            <div className="case-study-image">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
              />
            </div>

            <div className="case-study-details">
              <div>
                <span className="case-label">ABOUT</span>

                <p>{selectedProject.description}</p>
              </div>

              <div>
                <span className="case-label">SERVICES</span>

                <div className="case-services">
                  {selectedProject.services.map((service) => (
                    <span key={service}>
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              className="case-study-close-bottom"
              onClick={() => setSelectedProject(null)}
            >
              BACK TO WORK <span>↗</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Work;