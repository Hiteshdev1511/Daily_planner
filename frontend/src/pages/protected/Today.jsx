/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { InputTodo } from "../../components/index.js";
import { useSelector } from "react-redux";
import { TodoItem } from "../../components/index.js";

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

function Today() {
  const [isAddTaskInputOpen, setIsAddTaskInputOpen] = useState(false);
  const [todoList, setTodoList] = useState([]);

  console.log(isAddTaskInputOpen)


  const todos = useSelector((state) => state.todo);

  useEffect(() => {
    setTodoList(todos.filter((todo)=>todo.time === "today" && todo.isCompleted === false));
  }, [todos]);

  return (
    <div className="flex flex-col justify-center items-center h-11/12">
      <div className="w-1/2">
        <h1 className="text-3xl font-bold flex justify-start">Today</h1>
        {/* Main todos list */}
        <div>
          {todoList.map((todo, index) => (
            <TodoItem
              key={index}
              todo = {todo}
            />
          ))}
        </div>
        {/* Add task */}
        {isAddTaskInputOpen ? (
          <InputTodo onCancel={() => setIsAddTaskInputOpen(false)}/>
        ) : (
          <Addtask func={setIsAddTaskInputOpen} />
        )}

        {/* Add section line */}
        <hr className="text-transparent hover:text-blue-500" />
      </div>
    </div>
  );
}

export default Today;
