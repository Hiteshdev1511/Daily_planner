/* eslint-disable react/prop-types */
import {
  Bell,
  Plus,
  Search,
  Inbox,
  CalendarDays,
  Calendar,
  CheckCircle2,
  MoreHorizontal,
  ChevronDown,
  HelpCircle,
  ChevronsUpDown,
  Hash,
  Settings,
  LogOut,
} from "lucide-react";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import InputTodo from "./InputTodo";
import { useDetectOutsideClick } from "../hooks/useDetectOutsideClick";
import { addNewProject } from "../features/project/projectSlice";

function NavLink({ icon, text, count, to = "" }) {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => {
        if (to) navigate(to);
        return;
      }}
      className={`flex justify-between items-center p-2 rounded-md hover:bg-gray-200 cursor-pointer text-sm `}
    >
      <div className="flex items-center">
        {icon}
        <span className="ml-3">{text}</span>
      </div>
      {count && <span className="text-gray-500 font-medium">{count}</span>}
    </li>
  );
}

function NavButtons() {
  return (
    <nav>
      <ul className="space-y-1">
        <NavLink
          icon={<Search className="w-5 h-5 text-gray-500" />}
          text="Search"
        />
        <NavLink
          icon={<Inbox className="w-5 h-5 text-gray-500" />}
          text="Inbox"
          count={3}
          to="inbox"
        />
        <NavLink
          icon={<Calendar className="w-5 h-5 text-gray-500" />}
          text="Today"
          count={1}
          to="today"
        />
        <NavLink
          icon={<CalendarDays className="w-5 h-5 text-gray-500" />}
          text="Upcoming"
          to="upcoming"
        />
        <NavLink
          icon={<CheckCircle2 className="w-5 h-5 text-gray-500" />}
          text="Completed"
          to="completed"
        />
        <NavLink
          icon={<MoreHorizontal className="w-5 h-5 text-gray-500" />}
          text="More"
        />
      </ul>
    </nav>
  );
}

function Projects() {
  const navigate = useNavigate();
  const [showAddProject, setShowAddProject] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");
  const projects = useSelector((state) => state.project);
  const dispatch = useDispatch();
  const newProjRef = useRef(null);

  useDetectOutsideClick(newProjRef, () => setShowAddProject(false));

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
    <div className="mt-6">
      <div className="flex justify-between items-center mb-2 p-2">
        <h2
          className="text-sm font-bold text-gray-600 cursor-pointer"
          onClick={() => navigate("projects")}
        >
          My Projects
        </h2>
        <div
          ref={newProjRef}
          className="flex items-center space-x-2 text-gray-500"
        >
          <Plus
            onClick={(e) => {
              e.stopPropagation();
              setShowAddProject(!showAddProject);
            }}
            className="w-4 h-4 cursor-pointer hover:text-gray-800"
          />
          {showAddProject && (
            <div className="fixed bg-white shadow-xl z-30 w-50 h-20 bottom-65 left-50 p-3 flex flex-col items-center justify-center rounded-xl">
              <input
                onChange={(e) => setNewProjectName(e.target.value)}
                placeholder="Project"
                type="text"
                className="outline-none mb-2 border-1 rounded border-gray-300 placeholder:px-2"
              />
              <div className="flex items-center justify-evenly w-full">
                <button
                  onClick={() => setShowAddProject(false)}
                  className="bg-gray-300 px-3 text-black rounded active:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={submitProjectHandler}
                  className="bg-blue-500 px-3 text-white rounded active:bg-blue-600"
                >
                  Add
                </button>
              </div>
            </div>
          )}
          <ChevronDown className="w-4 h-4 cursor-pointer hover:text-gray-800" />
        </div>
      </div>
      <ul>
        {projects.map((project) => (
          <li
            key={project.prjId}
            onClick={() => navigate(`projects/${project.projectName}`)}
            className="flex items-center p-2 rounded-md text-orange-800 cursor-pointer text-sm hover:bg-blue-100"
          >
            <span className="font-bold">
              <Hash size="20" />
            </span>
            <span className="ml-3 font-semibold text-black">
              {project.projectName}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SidebarHeader() {
  const userProfileRef = useRef();
  const user = useSelector((state) => state.user);
  const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);
  useDetectOutsideClick(userProfileRef, () => setIsUserProfileOpen(false));
  const userInitials = user.username?.charAt(0).toUpperCase() || "U";
  return (
    <header
      ref={userProfileRef}
      className="flex justify-between items-center p-3 border-b border-gray-200 relative top-1"
    >
      <div
        className="flex items-center space-x-2 cursor-pointer p-1 rounded-xl hover:bg-gray-200"
        onClick={(e) => {
          e.stopPropagation();
          setIsUserProfileOpen(!isUserProfileOpen);
        }}
      >
        <div className="flex items-center justify-center h-7 w-7 bg-red-600 rounded-full text-white text-sm font-bold">
          {userInitials}
        </div>
        <span className="font-semibold text-sm">{user.username}</span>
        <ChevronsUpDown className="w-4 h-4 text-gray-500" />
      </div>
      {isUserProfileOpen && (
        <div className="fixed top-13 bg-white rounded-xl shadow-xl z-50 transition-all duration-300 w-65 flex flex-col h-50">
          <div className="p-3 flex flex-col h-full justify-around">
            <div className="flex h-fit items-center border-b-1 border-gray-200">
              <div className="flex items-center justify-center h-11 w-11 bg-red-600 rounded-full text-white text-xl font-bold mr-2">
                {userInitials}
              </div>
              <div>
                <div className="flex flex-col">
                  <span className="font-bold">{user.fullName}</span>
                  <span className="text-sm">{user.role}</span>
                </div>
                <span className="text-sm">{user.email}</span>
              </div>
            </div>
            <div className="border-b-1 border-gray-200 h-15 flex flex-col justify-around text-gray-600">
              <div className="flex items-center hover:bg-gray-100 hover:rounded pl-2">
                <Settings size="20" /> <span className="ml-1">Settings</span>
              </div>
              <div className="flex items-center hover:bg-gray-100 hover:rounded pl-2">
                <LogOut size="20" /> <span className="ml-1">Logout</span>
              </div>
            </div>
            <div>
              <span>{user.lastLoggedIn}</span>
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center space-x-2 text-gray-500 relative right-8">
        <Bell className="w-5 h-5 cursor-pointer hover:text-gray-800" />
      </div>
    </header>
  );
}

function SidebarFooter() {
  return (
    <footer className="p-3 border-t border-gray-200">
      <ul className="space-y-1">
        <NavLink
          icon={<Plus className="w-5 h-5 text-gray-500" />}
          text="Add a team"
        />
        <NavLink
          icon={<HelpCircle className="w-5 h-5 text-gray-500" />}
          text="Help & resources"
        />
      </ul>
    </footer>
  );
}

// --- THIS COMPONENT IS NOW FIXED ---
function SidebarAddTaskBtn() {
  const dropdownRef = useRef(null);
  const [isInputOpen, setIsInputOpen] = useState(false);

  // This hook now correctly handles closing the component
  useDetectOutsideClick(dropdownRef, () => setIsInputOpen(false));

  // The button handler toggles the visibility.
  // e.stopPropagation() is useful here to prevent the click that opens the modal
  // from immediately being caught by the hook's document listener and closing it.
  function addButtonHandler(e) {
    e.stopPropagation();
    setIsInputOpen(!isInputOpen);
  }

  // FIX 2: The incorrect `if (isInputOpen)` block that added event listeners
  // has been completely removed. The hook handles everything.

  return (
    <div ref={dropdownRef}>
      <button
        onClick={addButtonHandler}
        className="flex items-center w-full p-2 mb-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        <Plus className="w-5 h-5" />
        <span className="ml-2 font-semibold text-sm">Add task</span>
      </button>

      {isInputOpen && (
        <InputTodo
          // Attach the ref for the hook to watch
          onCancel={() => setIsInputOpen(false)} // Allow closing from the component itself
          styles="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        />
      )}
    </div>
  );
}

function Sidebar({ isSidebarOpen }) {
  return (
    <aside
      className={`flex flex-col h-screen bg-gray-100 text-gray-800 shadow-lg 
                 transition-all duration-300 ease-in-out
                 ${isSidebarOpen ? "w-64" : "w-0"}`}
    >
      <div
        className={`flex-1 flex flex-col overflow-hidden transition-opacity duration-200 
                   ${isSidebarOpen ? "opacity-100" : "opacity-0"}`}
      >
        <SidebarHeader />

        <div className="flex-1 overflow-y-auto p-3 relative">
          <SidebarAddTaskBtn />
          <NavButtons />
          <Projects />
        </div>

        <SidebarFooter />
      </div>
    </aside>
  );
}

export default Sidebar;
