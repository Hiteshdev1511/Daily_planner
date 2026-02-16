/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { InputTodo } from "../../components/index.js";
import { useSelector, useDispatch } from "react-redux";
import { TodoItem } from "../../components/index.js";
import { useParams } from "react-router-dom";
import { fetchAllTodos } from "../../features/todo/todoSlice";

function Addtask({ func }) {
  return (
    <div
      className="flex items-start group cursor-pointer h-15"
      onClick={() => func(true)}
    >
      <span className="text-xl w-5 h-5 text-blue-500 group-hover:bg-blue-500 group-hover:text-white rounded-full flex items-center justify-center">
        +
      </span>
      <span className="text-gray-500 ml-2 group-hover:text-blue-500 text-center">
        Add task
      </span>
    </div>
  );
}

function Project() {
  const [isAddTaskInputOpen, setIsAddTaskInputOpen] = useState(false);
  const { projectName } = useParams();
  const dispatch = useDispatch();

  const { projects } = useSelector((state) => state.project);
  const { todos, status } = useSelector((state) => state.todo);

  // Find project by name
  const currentProject = projects.find(
    (proj) => proj.title === projectName || proj.projectName === projectName,
  );

  useEffect(() => {
    if (!currentProject?.id) return;
    dispatch(fetchAllTodos());
  }, [dispatch, currentProject]);

  // Filter todos for this project
  const projectTodos = currentProject?.id
    ? todos.filter((todo) => {
        // Handle both nested object and flat projectId property
        const todoProjectId = todo.project?.id || todo.projectId;
        return todoProjectId === currentProject.id;
      })
    : [];

  if (!currentProject) {
    return (
      <div className="flex flex-col justify-center items-center h-11/12">
        <div className="w-1/2">
          <h1 className="text-3xl font-bold flex justify-start text-red-600">
            Project not found
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center h-11/12">
      <div className="w-1/2">
        <h1 className="text-3xl font-bold flex justify-start">{projectName}</h1>

        {/* Loading state */}
        {status === "loading" && (
          <p className="text-gray-500 mt-4">Loading todos...</p>
        )}

        {/* Empty state */}
        {status !== "loading" && projectTodos.length === 0 && (
          <p className="text-gray-500 mt-4">No tasks in this project</p>
        )}

        {/* Main todos list */}
        <div>
          {projectTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              projectId={currentProject?.id}
            />
          ))}
        </div>

        {/* Add task */}
        {status !== "loading" && (
          <>
            {isAddTaskInputOpen ? (
              <InputTodo onCancel={() => setIsAddTaskInputOpen(false)} />
            ) : (
              <Addtask func={setIsAddTaskInputOpen} />
            )}
          </>
        )}

        {/* Add section line */}
        <hr className="text-transparent hover:text-blue-500" />
      </div>
    </div>
  );
}

export default Project;
