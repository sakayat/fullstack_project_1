import React, { useEffect, useState } from "react";
import ProjectDetails from "./ProjectDetails";
import ProjectForm from "./ProjectForm";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    const getProject = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/projects");
        if(!res.ok) throw new Error("some thing not worked")
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
    <div className="home grid lg:grid-cols-6 gap-10">
      <div className="project-wrapper lg:col-span-3 xl:col-span-4">
        <div className="flex flex-wrap gap-10">
        {projects.map((project) => (
          <ProjectDetails key={project._id} project={project} />
        ))}
        </div>
      </div>
     <div className="col-span-1 row-start-1 lg:row-auto lg:col-span-3 xl:col-span-2"> 
        <ProjectForm />
      </div>
    </div>

  );
};

export default Home;
