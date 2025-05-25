import React from "react";
function Projects({ projects }) {
  return (
    <div className="section" id="projects">
      <h2 className="section-title">Projects</h2>
      {projects.map((proj, idx) => (
        <div key={idx}>
          <strong>{proj.name}</strong>, {proj.location} ({proj.period})
          <ul>
            {proj.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
export default Projects;
