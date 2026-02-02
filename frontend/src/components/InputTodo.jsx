/* eslint-disable react/prop-types */
import { useState, useRef, forwardRef } from "react";
import {
  Calendar,
  Flag,
  Bell,
  MoreHorizontal,
  ChevronDown,
} from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { addProject } from "../features/project/projectSlice";

// --- MOCK DATA ---
const DYNAMIC_PROJECTS = [{ prjId: 0, projectName: "Inbox" }];

// --- PRIORITY STYLES ---
const getPriorityStyles = (priority) => {
  switch (priority) {
    case 1:
      return {
        icon: <Flag className="w-4 h-4 text-red-500" />,
        text: "Priority 1",
      };
    case 2:
      return {
        icon: <Flag className="w-4 h-4 text-orange-500" />,
        text: "Priority 2",
      };
    case 3:
      return {
        icon: <Flag className="w-4 h-4 text-blue-500" />,
        text: "Priority 3",
      };
    default:
      return {
        icon: <Flag className="w-4 h-4 text-gray-500" />,
        text: "No Priority",
      };
  }
};

const InputTodo = forwardRef(function InputTodo(
  { styles = "", onCancel },
  ref
) {
  // --- STATE MANAGEMENT ---
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPriority, setSelectedPriority] = useState(null);
  const [selectedReminder, setSelectedReminder] = useState(null);
  const [selectedProject, setSelectedProject] = useState(DYNAMIC_PROJECTS[0]);
  const [showPriorityDropdown, setShowPriorityDropdown] = useState(false);
  const [showProjectDropdown, setShowProjectDropdown] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const project = useSelector((state) => state.project);
  const dispatch = useDispatch();
  // --- REFS for hidden inputs ---
  // To programmatically trigger the file inputs for date and time
  const reminderInputRef = useRef(null);

  // --- EVENT HANDLERS ---
  const handleDateChange = (e) => {
    const date = new Date(e.target.value);
    setSelectedDate(
      date.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      })
    );
  };

  const handleReminderChange = (e) => {
    const time = e.target.value;
    // Formatting time for display (AM/PM)
    const [hours, minutes] = time.split(":");
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    setSelectedReminder(`${formattedHours}:${minutes} ${ampm}`);
  };

  const handlePrioritySelect = (priority) => {
    setSelectedPriority(priority);
    setShowPriorityDropdown(false);
  };
  const handleSubmit = () => {
    let id = 5;
    // Basic validation
    if (
      [title, description, selectedDate].some(
        (prop) => !prop || prop.trim() === ""
      )
    ) {
      console.log("Please provide a valid fields");
      return;
    }

    const taskData = {
      id: id,
      title,
      description,
      time: selectedDate,
      priority: selectedPriority,
      isCompleted: false,
    };
    dispatch(addTodo(taskData));
    dispatch(addProject({ projectId: selectedProject.prjId, id: id++ }));
    onCancel();
    console.log("Task added");
  };

  const priorityInfo = getPriorityStyles(selectedPriority);

  return (
    // Main container
    <div
      ref={ref}
      className={`border border-gray-200 rounded-lg p-4 w-full max-w-xl shadow-sm bg-white ${styles}`}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Top section: Title and Description inputs */}
      <div className="flex flex-col space-y-1">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          className="text-base text-gray-800 font-medium focus:outline-none placeholder:text-gray-500"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
          className="text-sm text-gray-500 focus:outline-none placeholder:text-gray-500"
        />
      </div>

      {/* Middle section: Action buttons with selected values displayed */}
      <div className="flex items-center space-x-2 mt-3 relative">
        {/* Date Button */}
        <button
          onClick={() => {
            setShowCalendar(!showCalendar);
          }}
          className="flex items-center space-x-2 border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
        >
          <Calendar className="w-4 h-4" />
          <span>{selectedDate || "Date"}</span>
        </button>
        {/* Hidden Date Input */}
        {showCalendar && <input onChange={handleDateChange} type="date" />}

        {/* Priority Button & Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowPriorityDropdown(!showPriorityDropdown)}
            className="flex items-center space-x-2 border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
          >
            {priorityInfo.icon}
            <span>
              {selectedPriority ? `Priority ${selectedPriority}` : "Priority"}
            </span>
          </button>
          {showPriorityDropdown && (
            <div className="absolute top-full mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              {[1, 2, 3].map((p) => {
                const pInfo = getPriorityStyles(p);
                return (
                  <div
                    key={p}
                    onClick={() => handlePrioritySelect(p)}
                    className="flex items-center space-x-3 px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                  >
                    {pInfo.icon}
                    <span>{pInfo.text}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Reminder Button */}
        <button
          onClick={() => reminderInputRef.current.click()}
          className="flex items-center space-x-2 border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
        >
          <Bell className="w-4 h-4" />
          <span>{selectedReminder || "Reminders"}</span>
        </button>
        {/* Hidden Time Input */}
        <input
          type="time"
          ref={reminderInputRef}
          onChange={handleReminderChange}
          className="hidden"
        />

        {/* More Options Button */}
        <button className="flex items-center justify-center border border-gray-300 rounded-md p-2 text-gray-600 hover:bg-gray-100 transition-colors">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Separator and Bottom section */}
      <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-200">
        {/* Left side: Dynamic Project Selector */}
        <div className="relative">
          <button
            onClick={() => setShowProjectDropdown(!showProjectDropdown)}
            className="flex items-center space-x-2 border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
          >
            {selectedProject.projectName}
            <ChevronDown />
          </button>
          {showProjectDropdown && (
            <div className="absolute top-full mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <div
                className="flex items-center space-x-3 px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                onClick={() => setSelectedProject(DYNAMIC_PROJECTS[0])}
              >
                <span>{DYNAMIC_PROJECTS[0].projectName}</span>
              </div>
              {project.map((project) => (
                <div
                  key={project.prjId}
                  className="flex items-center space-x-3 px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                  onClick={() => setSelectedProject(project)}
                >
                  <span>{project.projectName}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right side: Cancel and Add Task buttons */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
          >
            Add task
          </button>
        </div>
      </div>
    </div>
  );
});

export default InputTodo;
