import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/main/Navigation";
import Header from "./components/main/Header";
import Summary from "./components/main/Summary";
import Education from "./components/main/Education";
import Skills from "./components/main/Skills";
import Certifications from "./components/main/Certifications";
import Languages from "./components/main/Languages";
import Experience from "./components/main/Experience";
import Projects from "./components/main/Projects";
import References from "./components/main/References";
import Footer from "./components/main/Footer";

import Loader from "./components/main/Loader";

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

  const certificates = data.certifications

  return (
    <>
      <Navigation certifications={certificates}/>
      <div className="container" style={{ marginTop: "80px" }}>
        <Header />
        <Summary summary={data.summary} />
        <Education education={data.education} />
        <Skills skills={data.skills} />
        {certificates && <Certifications certificates={certificates} />}
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
