function Experience({ experience }) {
  return (
    <div className="section" id="experience">
      <h2 className="section-title">Experience</h2>
      {experience.map((exp, idx) => (
        <div className="experience-item" key={idx}>
          <div className="experience-header">
            <strong>{exp.title}</strong>, {exp.company}
          </div>
          <div className="experience-meta">
            <span>{exp.location}</span> | <span>{exp.period}</span>
          </div>
          <div className="experience-description">
            {exp.description}
          </div>

          {exp.responsibilities && exp.responsibilities.length > 0 && (
            <div className="experience-responsibilities">
              <h6><strong>Responsibilities</strong></h6>
              <ul>
                {exp.responsibilities.map((item, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </div>
          )}

          {exp.achievements && exp.achievements.length > 0 && (
            <div className="experience-achievements">
              <h6><strong>Achievements</strong></h6>
              <ul>
                {exp.achievements.map((item, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Experience;
