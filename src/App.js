import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Languages from "./components/Languages";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import References from "./components/References";
import Footer from "./components/Footer";

import Loader from "./components/Loader";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => {
        return res.json();
      })
      .then(setData);
  }, []);

  if (!data) return <Loader />;
  return (
    <>
      <Navigation certifications={data.certifications && Array.isArray(data.certifications) && data.certifications.length > 0}/>
      <div className="container" style={{ marginTop: "80px" }}>
        <Header />
        <Summary summary={data.summary} />
        <Education education={data.education} />
        <Skills skills={data.skills} />
        {data.certifications && Array.isArray(data.certifications) && data.certifications.length > 0 &&
          <Certifications certifications={data.certifications} />}
        <Languages languages={data.languages} />
        <Experience experience={data.experience} />
        <Projects projects={data.projects} />
        <References references={data.references} />
        <Footer />
      </div>
    </>
  );
}

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("./data.json")
//       .then((res) => {
//         console.log(res); // Print the response object
//         return res.json();
//       })
//       .then(setData);
//   }, []);

//   if (!data) return <Loader/>;

//   return (
//     <BrowserRouter>
//       <Navigation />
//       <div className="container" style={{ marginTop: "80px" }}>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Navigate to="/summary" />} />
//           <Route path="/summary" element={<Summary summary={data.summary} />} />
//           <Route path="/education" element={<Education education={data.education}/>} />
//           <Route path="/skills" element={<Skills skills={data.skills}/>} />
//           {/* <Route path="/certifications" element={<Certifications />} /> */}
//           <Route path="/languages" element={<Languages languages={data.languages} />} />
//           <Route path="/experience" element={<Experience experience={data.experience}/>} />
//           <Route path="/projects" element={<Projects projects={data.experience}/>} />
//           {/* <Route path="/references" element={<References />} /> */}
//           {/* <Route path="*" element={<h2>404 - Not Found</h2>} /> */}
//         </Routes>
//       </div>
//       {/* <Footer /> */}
//     </BrowserRouter>
//   );
// }

export default App;
