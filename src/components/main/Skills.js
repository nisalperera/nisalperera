

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
  // return (
  //   <section>
  //     <h2>Skills</h2>
  //     <ul>
  //       {skills.map((skill, idx) => (
  //         <li key={idx}>{skill}</li>
  //       ))}
  //     </ul>
  //   </section>
  // );

  const numCols = 3;
  const skills2D = to2DArray(skills, numCols);

  return (
    <div className="section" id="skills">
      <h2 className="section-title">Skills</h2>
      <table className="skills-table table">
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
