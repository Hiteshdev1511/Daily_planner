import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TodoItem } from "../../components/index.js";

function Completed() {
  const [todoList, setTodoList] = useState([]);

  const { todos, status } = useSelector((state) => state.todo);
  const isLoading = status === "loading";

  useEffect(() => {
    setTodoList(todos.filter((todo) => todo.isCompleted === true));
  }, [todos]);

  return (
    <div className="flex flex-col justify-center items-center h-11/12">
      <div className="w-1/2">
        <h1 className="text-3xl font-bold flex justify-start">Completed</h1>

        {/* Loading state */}
        {isLoading && <p className="text-gray-500 mt-4">Loading todos...</p>}

        {/* Empty state */}
        {!isLoading && todoList.length === 0 && (
          <p className="text-gray-500 mt-4">No completed tasks yet</p>
        )}

        {/* Main todos list */}
        <div>
          {todoList.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>

        {/* Add section line */}
        <hr className="text-transparent hover:text-blue-500" />
      </div>
    </div>
  );
}

export default Completed;
