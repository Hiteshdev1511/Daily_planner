
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TodoItem } from "../../components/index.js";

function Completed() {
  const [todoList, setTodoList] = useState([]);

  const { todos } = useSelector((state) => state.todo);

  useEffect(() => {
    setTodoList(todos.filter((todo) => todo.isCompleted === true));
  }, [todos]);

  return (
    <div className="flex flex-col justify-center items-center h-11/12">
      <div className="w-1/2">
        <h1 className="text-3xl font-bold flex justify-start">Completed</h1>
        {/* Main todos list */}
        <div>
          {todoList.map((todo, index) => (
            <TodoItem key={index} todo={todo} />
          ))}
        </div>

        {/* Add section line */}
        <hr className="text-transparent hover:text-blue-500" />
      </div>
    </div>
  );
}

export default Completed;
