function Certifications({ certificates }) {
  return (
    <div className="section" id="certifications">
      <h2 className="section-title">Certifications</h2>
      {/* Iterate over each platform (e.g., coursera, udemy) */}
      {Object.entries(certificates).map(([platform, certs]) => (
        <div key={platform}>
          <h5 style={{ textTransform: "capitalize" }}>{platform}</h5>
          <ul>
            {certs.map((cert, idx) => (
              <li key={idx}>
                {cert.name}{" "}
                <a
                  href={cert.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: 8 }}
                >
                  View Certificate
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Certifications;
