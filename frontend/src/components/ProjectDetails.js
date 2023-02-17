import React from "react";
import { currencyFormatter } from "../utils/currencyFormatter";

const ProjectDetails = ({ project }) => {
  return (
    <div className="project-info bg-[#F5EFDF] text-[#111013] w-[30rem] p-4">
      <span className="text-cyan-900">ID: {project._id}</span>
      <h1 className="text-2xl truncate">{project.title}</h1>
      <p className="text-slate-500">{project.tech}</p>
      <div className="flex flex-col gap-2">
      <span>{currencyFormatter(project.budget)}</span>
        <span>
          Added on: {new Date(project.createdAt).toLocaleDateString()}
        </span>
        <span>Last Update : {new Date(project.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className="button flex gap-5 pt-3">
        <button className="bg-slate-800 text-white py-2 px-4">Update</button>
        <button className="bg-slate-800 text-white py-2 px-4">Delete</button>
      </div>
    </div>
  );
};

export default ProjectDetails;
