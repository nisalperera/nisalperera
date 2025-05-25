import React from "react";

// Example usage:
// const references = [
//   {
//     name: "Dr. Faraz Barzideh PhD",
//     position: "Senior Deep Learning Scientist at Wenn ASA",
//     contact: {
//       email: "faraz.barzideh@wenn.no",
//       phone: "+47 451 70 964"
//     }
//   },
//   {
//     name: "Mr. Pasindu Gamage PhD (Reading) MSc BEng (Hon’s) MIEEE",
//     position: "Program leader in Electrical & Electronics/ Mechatronics Engineering, Lecturer in Engineering at ICBT Campus Colombo Sri Lanka.",
//     contact: {
//       email: "pasindug@icbtcampus.edu.lk",
//       phone: "+94 70 273 2888"
//     }
//   }
// ];

function References({ references }) {
  return (
    <div className="section" id="references">
      <h2 className="section-title">References</h2>
      <ul>
        {references.map((ref, idx) => (
          <li key={idx} style={{ marginBottom: "1em" }}>
            <strong>{ref.name}</strong>
            <div>{ref.position}</div>
            <div>
              Email:{" "}
              <a href={`mailto:${ref.contact.email}`}>
                {ref.contact.email}
              </a>
              {" | "}
              Phone: {ref.contact.phone}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default References;
