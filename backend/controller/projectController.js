const { default: mongoose } = require("mongoose");
const Project = require("../models/projectModel");

// create project

const createPost = async (req, res) => {
  const data = req.body;
  try {
    const project = await Project.create({ ...data });
    res.status(200).json(project);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

// get all projects
const getAllProjects = async (req, res) => {
  const projects = await Project.find({}).sort({createdAt: - 1});
  res.status(200).json(projects);
};

// get single project
const singleProject = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json("invalid id");
  }
  const project = await Project.findById(id);
  if (!project) {
    return res.status(404).json("project not found");
  }
  res.status(200).json(project);
};

// delete project
const deleteProject = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json("invalid id");
  }
  const project = await Project.findOneAndDelete({ _id: id });
  if (!project) {
    return res.status(404).json("project not found");
  }
  res.status(200).json(project);
};

// update project
const updateProject = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json("invalid id");
  }
  const project = await Project.findOneAndUpdate({_id: id}, {...req.body});
  if (!project) {
    return res.status(404).json("project not found");
  }
  res.status(200).json(project);
};

module.exports = {
  createPost,
  getAllProjects,
  singleProject,
  deleteProject,
  updateProject,
};
