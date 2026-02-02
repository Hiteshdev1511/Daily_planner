// src/pages/ProjectsPage.jsx

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Search, ChevronDown, Hash } from "lucide-react";
import { addNewProject } from "../../features/project/projectSlice";

function ProjectsPage() {
  // 1. Get projects directly from the Redux store (the single source of truth)
  const projects = useSelector((state) => state.project);
  const navigate = useNavigate();

  // State for the search input and toggle (functionality can be added later)
  const [searchTerm, setSearchTerm] = useState("");
  const [showArchived, setShowArchived] = useState(false);

  // This will be used to filter projects based on search/archive state
  const filteredProjects = projects.filter((project) =>
    project.projectName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [showAddProject, setShowAddProject] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");
  const dispatch = useDispatch();

  function submitProjectHandler() {
    let id = 4;
    if (!newProjectName || newProjectName.trim() === "") return;
    const project = {
      prjId: id++,
      projectName: newProjectName,
      todos: [],
    };
    dispatch(addNewProject(project));
    setShowAddProject(false);
  }

  return (
    <div className="flex-1 p-8 bg-white">
      <main className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">My Projects</h1>
          <p className="text-sm text-gray-500 mt-1">Free plan</p>
        </header>

        {/* Toolbar Section */}
        <div className="flex justify-between items-center mb-6">
          {/* Left side: Search and Archive */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-3 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <label htmlFor="archived">Archived projects only</label>
              <button
                onClick={() => setShowArchived(!showArchived)}
                className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors ${
                  showArchived ? "bg-blue-500" : "bg-gray-300"
                }`}
              >
                <span
                  className={`w-3.5 h-3.5 bg-white rounded-full shadow-md transform transition-transform ${
                    showArchived ? "translate-x-5" : "translate-x-0"
                  }`}
                ></span>
              </button>
            </div>
          </div>

          {/* Right side: Add buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowAddProject(!showAddProject)}
              className="px-3 py-1.5 text-sm font-semibold text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 border border-gray-300"
            >
              + Add
            </button>
            {showAddProject && (
              <div className="fixed bg-white shadow-xl z-30 w-50 h-20 top-60 right-50 p-3 flex flex-col items-center justify-center rounded-xl">
                <input
                  onChange={(e) => setNewProjectName(e.target.value)}
                  placeholder="Project"
                  type="text"
                  className="outline-none mb-2"
                />
                <button
                  onClick={submitProjectHandler}
                  className="bg-blue-500 px-3 text-white rounded active:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            )}
            <button className="p-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 border border-gray-300">
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        <hr />

        {/* Projects List Section */}
        <div className="mt-6">
          <h2 className="text-sm font-bold text-gray-700">
            {filteredProjects.length} projects
          </h2>
          <ul className="mt-4 space-y-1">
            {filteredProjects.map((project) => (
              <li
                key={project.prjId}
                onClick={() => navigate(`/app/projects/${project.projectName}`)}
                className="flex items-center p-2 rounded-md hover:bg-gray-100 cursor-pointer"
              >
                <Hash className="w-5 h-5 text-gray-500" />
                <span className="ml-3 text-sm text-gray-800">
                  {project.projectName}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default ProjectsPage;
