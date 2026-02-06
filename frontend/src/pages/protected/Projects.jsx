// src/pages/ProjectsPage.jsx

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Search, ChevronDown, Hash } from "lucide-react";
import { fetchProjects, createProject } from "../../features/project/projectSlice";

function ProjectsPage() {
  // Redux state
  const { projects: apiProjects, status, error: reduxError } = useSelector((state) => state.project);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [showArchived, setShowArchived] = useState(false);
  const [showAddProject, setShowAddProject] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");
  
  // Derived state
  const isLoading = status === "loading";
  const error = reduxError;

  // Fetch projects from API on mount
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProjects());
    }
  }, [status, dispatch]);

  const filteredProjects = apiProjects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  async function submitProjectHandler() {
    if (!newProjectName || newProjectName.trim() === "") return;
    
    // Dispatch createProject thunk
    try {
      await dispatch(createProject({ title: newProjectName })).unwrap();
      setNewProjectName("");
      setShowAddProject(false);
    } catch (err) {
      console.error("Failed to create project:", err);
      // Error is handled by Redux state
    }
  }

  return (
    <div className="flex-1 p-8 bg-white">
      <main className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">My Projects</h1>
          <p className="text-sm text-gray-500 mt-1">Free plan</p>
        </header>

        {/* Error Display */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

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
                disabled={isLoading}
                className="pl-9 pr-3 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50"
              />
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <label htmlFor="archived">Archived projects only</label>
              <button
                onClick={() => setShowArchived(!showArchived)}
                disabled={isLoading}
                className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors ${
                  showArchived ? "bg-blue-500" : "bg-gray-300"
                } disabled:opacity-50`}
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
              disabled={isLoading}
              className="px-3 py-1.5 text-sm font-semibold text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 border border-gray-300 disabled:opacity-50"
            >
              + Add
            </button>
            {showAddProject && (
              <div className="fixed bg-white shadow-xl z-30 w-50 h-20 top-60 right-50 p-3 flex flex-col items-center justify-center rounded-xl">
                <input
                  onChange={(e) => setNewProjectName(e.target.value)}
                  value={newProjectName}
                  placeholder="Project name"
                  type="text"
                  disabled={isLoading}
                  className="outline-none mb-2 px-2 py-1 border border-gray-300 rounded disabled:opacity-50"
                />
                <button
                  onClick={submitProjectHandler}
                  disabled={isLoading}
                  className="bg-blue-500 px-3 py-1 text-white rounded active:bg-blue-600 disabled:opacity-50"
                >
                  {isLoading ? "Creating..." : "Submit"}
                </button>
              </div>
            )}
            <button
              disabled={isLoading}
              className="p-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 border border-gray-300 disabled:opacity-50"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        <hr />

        {/* Loading State */}
        {isLoading && apiProjects.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-600">Loading projects...</p>
          </div>
        )}

        {/* Projects List Section */}
        {!isLoading && (
          <div className="mt-6">
            <h2 className="text-sm font-bold text-gray-700">
              {filteredProjects.length} projects
            </h2>
            {filteredProjects.length === 0 && apiProjects.length === 0 && (
              <p className="text-gray-600 mt-4">
                No projects yet. Create one to get started!
              </p>
            )}
            {filteredProjects.length === 0 && apiProjects.length > 0 && (
              <p className="text-gray-600 mt-4">
                No projects match your search.
              </p>
            )}
            <ul className="mt-4 space-y-1">
              {filteredProjects.map((project) => (
                <li
                  key={project.id}
                  onClick={() =>
                    navigate(`/app/projects/${project.id}`, {
                      state: { project },
                    })
                  }
                  className="flex items-center p-2 rounded-md hover:bg-gray-100 cursor-pointer"
                >
                  <Hash className="w-5 h-5 text-gray-500" />
                  <span className="ml-3 text-sm text-gray-800">
                    {project.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}

export default ProjectsPage;
