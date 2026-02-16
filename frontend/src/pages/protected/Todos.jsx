import { PanelRight, SquareMenu, MessageSquare, Ellipsis } from "lucide-react";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { useDispatch } from "react-redux";
import { fetchAllTodos } from "../../features/todo/todoSlice";

function Navbar() {
  return (
    <header className="flex text-gray-500 p-5 justify-end items-center border-b bg-white">
      <div className="flex items-center space-x-6">
        <span className="flex items-center cursor-pointer hover:text-gray-800">
          <SquareMenu className="mr-2 h-5 w-5" />
          <span>Display</span>
        </span>
        <MessageSquare className="cursor-pointer hover:text-gray-800 h-5 w-5" />
        <Ellipsis className="cursor-pointer hover:text-gray-800 h-5 w-5" />

        <button
          type="button"
          className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600  active:bg-blue-700"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 16"
          >
            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
          </svg>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-2 -end-2 dark:border-gray-900">
            20
          </div>
        </button>
      </div>
    </header>
  );
}

function Todos() {
  // State to control the sidebar's visibility. Set to `true` to start open.
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadData = async () => {
      await dispatch(fetchAllTodos());
    };
    loadData();
  }, [dispatch]);

  return (
    <div className="relative min-h-screen bg-gray-50">
      <PanelRight
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`absolute top-5 text-gray-500 hover:text-gray-800 cursor-pointer 
                   transition-all duration-300 ease-in-out z-20
                   ${isSidebarOpen ? "left-55" : "left-5"}`}
      />
      <div className="flex h-screen">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <main className="flex-1 p-6 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Todos;
