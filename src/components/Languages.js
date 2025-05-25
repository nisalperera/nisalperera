import React from "react";

// Renders a row for each language, with dynamic dots
function LanguageRow({ name, filled, total = 5 }) {
  return (
    <tr>
      <th>{name}</th>
      <td>
        <div className="proficiency">
          {Array.from({ length: total }).map((_, idx) => (
            <span
              key={idx}
              className={`dot${idx < filled ? " filled" : ""}`}
            ></span>
          ))}
        </div>
      </td>
    </tr>
  );
}

function LanguagesTable({ languages }) {
  return (
    <div className="section" id="languages">
      <h2 className="section-title">Languages</h2>
      <table className="languages-table table">
        <tbody>
          {languages.map((lang) => (
            <LanguageRow
              key={lang.name}
              name={lang.name}
              filled={lang.proficiency}
              total={lang.total || 5}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Languages({ languages }) {
  return <LanguagesTable languages={languages} />;
}
export default Languages;
