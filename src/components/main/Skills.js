import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function to2DArray(arr, cols) {
  const result = [];
  for (let i = 0; i < arr.length; i += cols) {
    const row = arr.slice(i, i + cols);
    while (row.length < cols) {
      row.push(""); // Pad with empty strings
    }
    result.push(row);
  }

  return result;
}

function Skills({ skills }) {
  const numCols = 3;
  const { theme } = useContext(ThemeContext);
  const skills2D = to2DArray(skills, numCols);

  const tableClass = theme === 'dark'
    ? 'skills-table table table-dark'
    : 'skills-table table';

  return (
    <div className="section" id="skills">
      <h2 className="section-title">Skills</h2>
      <table className={ tableClass }>
      <tbody>
        {skills2D.map((row, rowIdx) => (
          <tr key={rowIdx}>
            {row.map((skill, colIdx) => (
              <td key={colIdx}>{skill}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}
export default Skills;
