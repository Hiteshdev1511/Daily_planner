import { useSelector } from "react-redux";
import { Logo } from "../../components";
import { useRef, useState } from "react";

function VerifyEmail() {
  const { email } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  function verifyEmailHandler() {
    console.log(value);
    console.log(inputRef);
    setLoading(false);
    setError(false);
  }

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-8 sm:p-10 rounded-xl shadow-lg max-w-md w-full text-center">
        {/* Logo/Icon */}
        <div className="mb-6 flex justify-center">
          <Logo />
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Please check your email
        </h1>
        <p className="text-gray-500 mb-8">
          We&apos;ve sent a code to{" "}
          <span className="font-semibold text-gray-700">{email}</span>
        </p>

        {/* Code Input Fields */}
        <div className="flex justify-center space-x-2 sm:space-x-3 mb-8">
          <input
            type="text"
            maxLength="1"
            className="w-12 h-14 sm:w-14 sm:h-16 text-center text-2xl font-bold border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
            ref={inputRef}
            onChange={(e) => {
              setValue(prev => prev+e.target.value);
              inputRef.current = e.target.nextSibling;
              inputRef.current.focus()
            }}
          />
          <input
            type="text"
            maxLength="1"
            className="w-12 h-14 sm:w-14 sm:h-16 text-center text-2xl font-bold border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
            ref={inputRef}
            onChange={(e) => {
              setValue(prev => prev+e.target.value);
              inputRef.current = e.target.nextSibling;
              inputRef.current.focus()
            }}
          />
          <input
            type="text"
            maxLength="1"
            className="w-12 h-14 sm:w-14 sm:h-16 text-center text-2xl font-bold border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
            ref={inputRef}
            onChange={(e) => {
              setValue(prev => prev+e.target.value);
              inputRef.current = e.target.nextSibling;
              inputRef.current.focus()
            }}
          />
          <input
            type="text"
            maxLength="1"
            className="w-12 h-14 sm:w-14 sm:h-16 text-center text-2xl font-bold border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
            ref={inputRef}
            onChange={(e) => {
              setValue(prev => prev+e.target.value);
              inputRef.current = e.target.nextSibling;
              inputRef.current.focus()
            }}
          />
          <input
            type="text"
            maxLength="1"
            className="w-12 h-14 sm:w-14 sm:h-16 text-center text-2xl font-bold border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
            ref={inputRef}
            onChange={(e) => {
              setValue(prev => prev+e.target.value);
              inputRef.current = e.target.nextSibling;
              inputRef.current.focus()
            }}
          />
          <input
            type="text"
            maxLength="1"
            className="w-12 h-14 sm:w-14 sm:h-16 text-center text-2xl font-bold border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
            ref={inputRef}
            onChange={(e) => {
              setValue(prev => prev+e.target.value);
            }}
          />
          
        </div>

        <button
          onClick={verifyEmailHandler}
          className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-bold py-3 px-6 rounded-md w-full transition text-lg cursor-pointer"
        >
          Verify
        </button>

        {/* Loading spinner */}
        {loading && (
          <div className="mt-6 flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        )}

        {error && (
          <div
            className="flex items-center p-4 mb-4 text-sm text-red-600 rounded-lg bg-red-50 mt-5"
            role="alert"
          >
            <svg
              className="shrink-0 w-4 h-4 me-3 flex items-end"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <div>
              <span className="font-medium">Invalid Code!</span> Make sure you
              have entered correct code
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default VerifyEmail;
