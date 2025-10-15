import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

// Renders a row for each language, with dynamic dots
function LanguageRow({ name, level, filled, total = 5 }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{level}</td>
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

  const { theme } = useContext(ThemeContext);

  const tableClass = theme === 'dark'
    ? 'skills-table table table-dark'
    : 'skills-table table';

  return (
    <div className="section" id="languages">
      <h2 className="section-title">Languages</h2>
      <table className={ tableClass }>
        <thead>
          <tr>
            <th>Name</th>
            <th>Level</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {languages.map((lang) => (
            <LanguageRow
              key={lang.name}
              name={lang.name}
              level={lang.level}           
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
