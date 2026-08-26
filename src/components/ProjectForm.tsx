import { useState } from "react";
import TextReveal from "./TextReveal";

const projectTypes = [
  "Video Editing",
  "Motion Graphics",
  "3D / CGI",
  "VFX",
  "Poster / Design",
  "Social Media Content",
  "Full Campaign",
];

const budgets = [
  "₹10K – ₹25K",
  "₹25K – ₹50K",
  "₹50K – ₹1L",
  "₹1L+",
  "Let's discuss",
];

function ProjectForm() {
  const [selectedType, setSelectedType] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log({
      projectType: selectedType,
      budget: selectedBudget,
    });

    alert("Thanks! Your project request has been received.");
  };

  return (
    <section className="project-form-section" id="project">
      <div className="project-form-heading">
        <span>06 / START A PROJECT</span>
        <span>LET'S MAKE SOMETHING</span>
      </div>

      <div className="project-form-intro">
        <TextReveal>
          <h2>
            GOT AN
            <br />
            <i>IDEA?</i>
          </h2>
        </TextReveal>

        <p>
          Tell us what you're building. Give us the rough version, the
          polished version or just the idea in your head. We'll take it from
          there.
        </p>
      </div>

      <form className="project-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>01 / WHAT DO YOU NEED?</label>

          <div className="choice-grid">
            {projectTypes.map((type) => (
              <button
                type="button"
                key={type}
                className={`choice ${
                  selectedType === type ? "selected" : ""
                }`}
                onClick={() => setSelectedType(type)}
              >
                {type}
                <span>↗</span>
              </button>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>02 / WHAT'S THE BUDGET?</label>

          <div className="budget-grid">
            {budgets.map((budget) => (
              <button
                type="button"
                key={budget}
                className={`choice ${
                  selectedBudget === budget ? "selected" : ""
                }`}
                onClick={() => setSelectedBudget(budget)}
              >
                {budget}
              </button>
            ))}
          </div>
        </div>

        <div className="form-details">
          <div className="input-row">
            <input type="text" placeholder="YOUR NAME" required />
            <input type="email" placeholder="YOUR EMAIL" required />
          </div>

          <input type="text" placeholder="COMPANY / BRAND" />

          <textarea
            placeholder="TELL US ABOUT THE PROJECT..."
            rows={5}
            required
          />

          <button className="submit-project" type="submit">
            SEND PROJECT REQUEST <span>↗</span>
          </button>
        </div>
      </form>
    </section>
  );
}

export default ProjectForm;