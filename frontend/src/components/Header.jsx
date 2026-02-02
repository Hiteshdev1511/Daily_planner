import { ChevronDown } from "lucide-react";
import { useState, useRef } from "react"; // Make sure to import useRef
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/user/userSlice";

// A reusable dropdown component
// eslint-disable-next-line react/prop-types
const DropdownItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  // Clear any active timer and open the dropdown
  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  // Set a timer to close the dropdown after a short delay
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150); // 150ms delay feels natural
  };

  return (
    // The hover events are now on the parent list item
    <li
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* This is the visible button */}
      <button className="h-10 px-4 hover:bg-gray-100 focus:bg-gray-100 rounded-lg flex items-center justify-center font-semibold gap-1 cursor-pointer">
        <span>{title}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* The dropdown menu appears when isOpen is true */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg p-2 z-10 border border-gray-200">
          {children}
        </div>
      )}
    </li>
  );
};

// A simple link item for consistency (No changes here)
// eslint-disable-next-line react/prop-types
const NavLink = ({ children, href = "#" }) => (
  <li className="h-10 px-4 hover:bg-gray-100 rounded-lg flex items-center justify-center font-semibold">
    <a href={href} className="cursor-pointer">
      {children}
    </a>
  </li>
);

// Header component (No changes here)
function Header() {
  const { id: userId } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  function getStartedHandler() {
    if (!userId) {
      navigate("/signup");
    } else {
      navigate("/app");
    }
  }
  function logoutHandler() {
    dispatch(logout())
  }
  return (
    <nav className="flex justify-around bg-white text-black py-2 h-20 items-center shadow-sm sticky top-0 z-10">
      <Logo />
      <ul className="flex items-center justify-end mx-9 gap-2 w-200">
        <DropdownItem title="Made for">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white rounded-md"
          >
            Individuals
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white rounded-md"
          >
            Small Teams
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white rounded-md"
          >
            Enterprises
          </a>
        </DropdownItem>

        <DropdownItem title="Resources">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white rounded-md"
          >
            Blog
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white rounded-md"
          >
            Documentation
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white rounded-md"
          >
            Support Center
          </a>
        </DropdownItem>

        <NavLink>Pricing</NavLink>
        {userId ? (
          <button 
            onClick={logoutHandler}
            className="h-10 px-4 hover:bg-gray-100 rounded-lg flex items-center justify-center font-semibold hover:cursor-pointer">
            Logout
          </button>
        ) : (
          <NavLink href="/login">Login</NavLink>
        )}

        <div className="ml-4 h-10 px-5 text-white bg-blue-600 hover:bg-blue-700 flex items-center justify-center font-semibold rounded-lg">
          <button onClick={getStartedHandler}>
            {userId ? "Start for free" : "Sign up"}
          </button>
        </div>
      </ul>
    </nav>
  );
}

export default Header;
