function Education({ education }) {
  return (
    <div className="section" id="education">
      <h2 className="section-title">Education</h2>
      <ul>
        {education.map((edu, idx) => (
          <li key={idx} style={{ marginBottom: "2rem" }}>
            <div>
              <strong>{edu.degree}</strong>
              {", "}
              <a href={edu.instituteLink}>{edu.institution}</a>
              {" ("}
              {edu.period}
              {", "}
              {edu.location}
              {")"}
            </div>
            {edu.additionalInfo && edu.additionalInfo.length > 0 && (
              <ul style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
                {edu.additionalInfo.map((info, i) => (
                  <li key={i}>{info}</li>
                ))}
              </ul>
            )}
            {edu.thesis && (
              <div>
              {edu.thesis.thesisDocumentUrl ? (
                <a
                  href={edu.thesis.thesisDocumentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#007bff", textDecoration: "underline" }}
                  title="View Thesis PDF"
                >
                  📄 {edu.thesis.title}
                </a>
              ) : (
                <span style={{ textDecoration: "underline" }}>{edu.thesis.title}</span>
              )}
            </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Education;
