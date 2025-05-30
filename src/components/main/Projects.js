

function Projects({ projects }) {
  return (
    <div className="section" id="projects">
      <h2 className="section-title">Projects</h2>
      {projects.map((proj, idx) => (
        <div key={idx} className="project-item">
          <strong>{proj.name}</strong>
          {proj.company && <> — <span>{proj.company}</span></>}
          {proj.period && <> ({proj.period})</>}
          <p>{proj.description}</p>
          {proj.details && proj.details.length > 0 && (
            <ul>
              {proj.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          )}
          {proj.links && proj.links.length > 0 && (
            <div className="project-links">
              <strong>Links: </strong>
              <ul>
                {proj.links.map((link, lidx) => (
                  <li key={lidx}>
                    {link.name}
                    {link.github && (
                      <>
                        {" "}
                        [<a href={link.github} target="_blank" rel="noopener noreferrer">GitHub</a>]
                      </>
                    )}
                    {link.official && (
                      <>
                        {" "}
                        [<a href={link.official} target="_blank" rel="noopener noreferrer">Official</a>]
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Projects;
