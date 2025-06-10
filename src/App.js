import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import MainLayout from "./MainLayout";
import Summary from "./components/main/Summary";
import Education from "./components/main/Education";
import Skills from "./components/main/Skills";
import Certifications from "./components/main/Certifications";
import Languages from "./components/main/Languages";
import Experience from "./components/main/Experience";
import Projects from "./components/main/Projects";
import Project from "./components/projects/Project";
import References from "./components/main/References";

import Loader from "./components/main/Loader";
import NotFound from "./components/error/NotFound";

import { LoadDataFile } from "./utils/dataLoader";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function ProjectWrapper({ projects }) {
  const { id } = useParams();
  const project = projects.find(p =>
    p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/\s+/g, '-').replace(/-+/g, '-').slice(0, 50).replace(/^-|-$/g, '') === id
  );
  return <Project project={project} />;
}

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    LoadDataFile("./data.json")
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Loader />;
  if (data === null){
    console.log("Data is null, likely due to an error loading the data file.");
    return <NotFound />;
  }
   
  return (
    <BrowserRouter basename="/nisalperera">
      <Routes>
        <Route path="/" element={<MainLayout data={data} />}>
          {/* Home/Projects List */}
          <Route
            index
            element={
              <>
                <Summary summary={data.summary} />
                <Education education={data.education} />
                <Skills skills={data.skills} />
                {data.certifications && <Certifications certificates={data.certifications} />}
                <Languages languages={data.languages} />
                <Experience experience={data.experience} />
                <Projects projects={data.projects} />
                <References references={data.references} />
              </>
            }
          />
          {/* Project Detail */}
          <Route path="project/:id" element={<ProjectWrapper projects={data.projects} />} />
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
