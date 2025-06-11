import { Link } from 'react-router-dom';

/**
 * Renders a list of projects with details, including navigation links for each project.
 *
 * Displays each project's name as a clickable link to a project-specific route, along with optional company, period, description, details, and related links.
 *
 * @param {Object[]} projects - Array of project objects to display.
 */
function Projects({ projects }) {
  return (
    <div className="section" id="projects">
      <h2 className="section-title">Projects</h2>
      {projects.map((proj, idx) => (
        <div key={idx} className="project-item">
          <Link to={`/project/${proj.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/\s+/g, '-').replace(/-+/g, '-').slice(0, 50).replace(/^-|-$/g, '')}`}>
            <strong>{proj.name}</strong>
          </Link>
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
