import React, { useEffect, useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    const getProject = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/projects");
        const data = await res.json();
        setProjects(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      }
    };
    getProject();
  }, []);
  return (
    <div className="project-wrapper">
      <div className="project-left flex flex-wrap gap-10">
        {projects.map((project) => (
          <ProjectDetails key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Home;
