/* eslint-disable react/prop-types */
import {
  GripVertical,
  Calendar,
  Pencil,
  MessageSquare,
  MoreHorizontal,
  Check,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../features/todo/todoSlice";

// The TodoItem component receives task data as props.
function TodoItem({ todo, projectId }) {
  const dispatch = useDispatch();

  function todoCompleteHandler(id) {
    // Determine projectId: prop > todo.project (if populated object) > todo.projectId
    const pId = projectId || (typeof todo.project === 'object' ? todo.project._id : todo.project) || todo.projectId;
    if (!pId) {
      console.error("No projectId found for todo", todo);
      return;
    }
    dispatch(toggleTodo({ projectId: pId, todoId: id }));
  }

  return (
    // Main container with padding, a bottom border, and flexbox for alignment.
    // `group` class is added to enable hover effects on child elements.
    <div className="group flex items-start justify-between p-3 border-b border-gray-200 hover:bg-gray-50">
      {/* Left side: Checkbox and Task Details */}
      <div className="flex items-start">
        {/* Custom Checkbox */}
        <div className="flex-shrink-0 mt-1 mr-3 cursor-pointer">
          <div
            onClick={() => todoCompleteHandler(todo._id)}
            className="cursor-pointer relative flex items-center justify-center h-5 w-5 rounded-full border-2 border-orange-400 hover:bg-orange-100"
          >
            {/* The drag handle icon is hidden by default and appears on hover over the parent `group` */}
            {todo.isCompleted && <Check color="orange" size={16} />}
            <GripVertical className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity relative right-8" />
          </div>
        </div>

        {/* Task Details Container */}
        <div className="flex flex-col">
          <p className="font-medium text-gray-800">{todo.title}</p>
          <p className="text-sm text-gray-500 mt-1">{todo.description}</p>
          <div className="flex items-center mt-2">
            <Calendar className="w-4 h-4 text-purple-600" />
            <span className="ml-2 text-sm font-semibold text-purple-600">
              {todo.time}
            </span>
          </div>
        </div>
      </div>

      {/* Right side: Action Icons */}
      {/* These icons are hidden by default and fade in when the user hovers over the main container (`group`). */}
      <div className="flex items-center space-x-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
        <Pencil className="w-5 h-5 cursor-pointer hover:text-gray-700" />
        <Calendar className="w-5 h-5 cursor-pointer hover:text-gray-700" />
        <MessageSquare className="w-5 h-5 cursor-pointer hover:text-gray-700" />
        <MoreHorizontal className="w-5 h-5 cursor-pointer hover:text-gray-700" />
      </div>
    </div>
  );
}

export default TodoItem;
