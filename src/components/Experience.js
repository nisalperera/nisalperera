import React from "react";

function Experience({ experience }) {
  return (
    <div className="section" id="experience">
      <h2 className="section-title">Experience</h2>
      {experience.map((exp, idx) => (
        <div key={idx}>
          <strong>{exp.title}</strong>, {exp.company}, {exp.location} ({exp.period})
          <ul>
            {exp.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
export default Experience;
