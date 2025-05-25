import React from "react";

function Education({education}) {
  return (
    <div className="section" id="education">
      <h2 className="section-title">Education</h2>
      <ul>
        {education.map((edu, idx) => (
          <li key={idx}>
            <strong>{edu.degree}</strong>, {edu.institution} ({edu.period}, {edu.location})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Education;
