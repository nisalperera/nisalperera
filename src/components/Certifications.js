import React from "react";

function Certifications({certifications}) {
  return (
    <div className="section" id="certifications">
      <h2 className="section-title">Certifications</h2>
      <ul>
        <li>AWS Cloud Technical Essentials</li>
        <li>Deep Learning Specialization, DeepLearning.ai</li>
        <li>TensorFlow in Practice, DeepLearning.ai</li>
      </ul>
    </div>
  );
}

export default Certifications;
