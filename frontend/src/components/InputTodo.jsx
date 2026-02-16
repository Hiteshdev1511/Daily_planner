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
import { useForm } from "react-hook-form";
import { createTodo } from "../features/todo/todoSlice";

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

const InputTodo = forwardRef(function InputTodo(props, ref) {
  const { styles = "", onCancel } = props;
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      deadline: new Date().toISOString().slice(0, 10),
      priority: "1",
      project: { title: "inbox", id: 1 },
    },
  });

  const [selectedReminder, setSelectedReminder] = useState(null);
  const [showPriorityDropdown, setShowPriorityDropdown] = useState(false);
  const [showProjectDropdown, setShowProjectDropdown] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const { projects: project } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  const reminderInputRef = useRef(null);

  const handleProjectSelect = (project) => {
    setValue("project.id", project?.id);
    setValue("project.title", project?.title);
    setShowProjectDropdown(false);
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
    setValue("priority", priority);
    setShowPriorityDropdown(false);
  };

  const formSubmitHandler = async (data) => {
    // Basic validation - only title and date are required
    try {
      const taskData = {
        ...data,
        isCompleted: false,
      };

      await dispatch(createTodo({ data: taskData }));
      onCancel();
    } catch (error) {
      console.error("An error occured while creating a todo")
    }

    // Ensure we have a valid project ID (default to Inbox or first project if not set)
    // Assuming DYNAMIC_PROJECTS[0] is inbox, we might need a real ID for it from backend or handle it specically
    // const projectId =
    //   selectedproject.id || selectedProject.id || selectedProject.prjId;

    // If projectId is 0 (Inbox mock), checking if backend supports it.
    // For now assuming we have a selected project with ID.
    // If selectedProject is the mock "Inbox" with ID 0, we might need to handle it.
    // But let's dispatch what we have.
  };

  const priorityInfo = getPriorityStyles(watch("priority"));

  if (props.isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
        <div
          ref={ref}
          className={`border border-gray-200 rounded-lg p-4 w-full max-w-xl shadow-2xl bg-white ${styles}`}
          onClick={(e) => e.stopPropagation()}
        >
          <form onSubmit={handleSubmit(formSubmitHandler)}>
            {/* Top section: Title and Description inputs */}
            <div className="flex flex-col space-y-1">
              <input
                type="text"
                placeholder="Enter task title"
                className={`text-base text-gray-800 font-medium focus:outline-none placeholder:text-gray-500`}
                autoFocus
                {...register("title", {
                  required: "Title is required",
                  pattern: {
                    value: /\S/,
                    message: "Title cannot contain only spaces",
                  },
                })}
              />
              {errors.title && (
                <p className="mt-1 text-xs text-red-600">
                  {errors.title.message}
                </p>
              )}
              <input
                type="text"
                placeholder="Enter description"
                className="text-sm text-gray-500 focus:outline-none placeholder:text-gray-500"
                {...register("description", {
                  required: "Description is required",
                  pattern: {
                    value: /\S/,
                    message: "Description cannot contain only space",
                  },
                })}
              />
              {errors.description && (
                <p className="mt-1 text-xs text-red-600">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Middle section: Action buttons with selected values displayed */}
            <div className="flex items-center space-x-2 mt-3 relative">
              {/* Date Button */}
              <button
                onClick={() => {
                  setShowCalendar(!showCalendar);
                }}
                type="button"
                className="flex items-center space-x-2 border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>{watch("deadline") || "Date"}</span>
              </button>
              {/* Hidden Date Input */}
              {showCalendar && (
                <input
                  type="date"
                  {...register("deadline", {
                    pattern: {
                      value: /^\d{4}-\d{2}-\d{2}$/,
                      message: "Date format is invalid",
                    },
                  })}
                />
              )}
              {errors.deadline && (
                <p className="mt-1 text-xs text-red-600">
                  {errors.deadline.message}
                </p>
              )}
              {/* Priority Button & Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowPriorityDropdown(!showPriorityDropdown)}
                  className="flex items-center space-x-2 border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  {priorityInfo.icon}
                  <span>
                    {watch("priority")
                      ? `Priority ${watch("priority")}`
                      : "Priority"}
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
                type="button"
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
              <button
                type="button"
                className="flex items-center justify-center border border-gray-300 rounded-md p-2 text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>

            {/* Separator and Bottom section */}
            <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-200">
              {/* Left side: Dynamic Project Selector */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowProjectDropdown(!showProjectDropdown)}
                  className="flex items-center space-x-2 border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  {watch("project.title")}
                  <ChevronDown />
                </button>
                {showProjectDropdown && (
                  <div className="absolute top-full mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    {project.map((proj) => {
                      return (
                        <div
                          key={proj._id || proj?.id}
                          className="flex items-center space-x-3 px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                          onClick={() => handleProjectSelect(proj)}
                        >
                          <span>{proj?.title}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Right side: Cancel and Add Task buttons */}
              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  onClick={onCancel}
                  className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
                >
                  Add task
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    // Main container
    <div
      ref={ref}
      className={`border border-gray-200 rounded-lg p-4 w-full max-w-xl shadow-sm bg-white ${styles}`}
      onClick={(e) => e.stopPropagation()}
    >
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        {/* Top section: Title and Description inputs */}
        <div className="flex flex-col space-y-1">
          <input
            type="text"
            placeholder="Enter task title"
            className={`text-base text-gray-800 font-medium focus:outline-none placeholder:text-gray-500`}
            autoFocus
            {...register("title", {
              required: "Title is required",
              pattern: {
                value: /\S/,
                message: "Title cannot contain only spaces",
              },
            })}
          />
          {errors.title && (
            <p className="mt-1 text-xs text-red-600">{errors.title.message}</p>
          )}
          <input
            type="text"
            placeholder="Enter description"
            className="text-sm text-gray-500 focus:outline-none placeholder:text-gray-500"
            {...register("description", {
              required: "Description is required",
              pattern: {
                value: /\S/,
                message: "Description cannot contain only space",
              },
            })}
          />
          {errors.description && (
            <p className="mt-1 text-xs text-red-600">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Middle section: Action buttons with selected values displayed */}
        <div className="flex items-center space-x-2 mt-3 relative">
          {/* Date Button */}
          <button
            type="button"
            onClick={() => {
              setShowCalendar(!showCalendar);
            }}
            className="flex items-center space-x-2 border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <Calendar className="w-4 h-4" />
            <span>{watch("deadline") || "Date"}</span>
          </button>
          {/* Hidden Date Input */}
          {showCalendar && (
            <input
              type="date"
              {...register("deadline", {
                pattern: {
                  value: /^\d{4}-\d{2}-\d{2}$/,
                  message: "Date format is invalid",
                },
              })}
            />
          )}
          {errors.deadline && (
            <p className="mt-1 text-xs text-red-600">
              {errors.deadline.message}
            </p>
          )}

          {/* Priority Button & Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowPriorityDropdown(!showPriorityDropdown)}
              className="flex items-center space-x-2 border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
            >
              {priorityInfo.icon}
              <span>
                {watch("priority")
                  ? `Priority ${watch("priority")}`
                  : "Priority"}
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
            type="button"
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
          <button
            type="button"
            className="flex items-center justify-center border border-gray-300 rounded-md p-2 text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>

        {/* Separator and Bottom section */}
        <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-200">
          {/* Left side: Dynamic Project Selector */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowProjectDropdown(!showProjectDropdown)}
              className="flex items-center space-x-2 border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
            >
              {watch("project.title")}
              <ChevronDown />
            </button>
            {showProjectDropdown && (
              <div className="absolute top-full mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                {project.map((proj) => (
                  <div
                    key={proj._id || proj?.id}
                    className="flex items-center space-x-3 px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                    onClick={() => handleProjectSelect(proj)}
                  >
                    <span>{proj.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right side: Cancel and Add Task buttons */}
          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
            >
              Add task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
});

export default InputTodo;
