

function Summary({summary}) {
  return (
    <div className="section" id="summary">
      <h2 className="section-title">Summary</h2>
      <p dangerouslySetInnerHTML={{ __html: summary }}></p>
    </div>
  );
}

export default Summary;
