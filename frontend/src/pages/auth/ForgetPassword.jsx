function ForgetPassword() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4 space-y-8">
      
      {/* --- Card 1: Forgot Password Form --- */}
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-blue-600 mb-2">Forgot your password?</h2>
        <p className="text-gray-500 mb-6">Your password will be reset by email.</p>
        
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
              Enter your email address
            </label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="name@example.com"
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Next
          </button>
        </form>
        
        <div className="text-center mt-4">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Back to log in
          </a>
        </div>
      </div>

      {/* --- Card 2: Confirmation Screen --- */}
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
        {/* Icon */}
        <div className="mb-4 flex justify-center">
            <svg className="w-16 h-16 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.868-8.455a2.25 2.25 0 011.183 1.981V12m-13.5 0V9.906a2.25 2.25 0 011.183-1.981L12 4.482l6.478 3.488a2.25 2.25 0 011.183 1.981M12 12v6.75a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25V12m13.5 0v6.75a2.25 2.25 0 01-2.25 2.25h-2.25a2.25 2.25 0 01-2.25-2.25V12" />
            </svg>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Check your email</h2>
        <p className="text-gray-500">
          We&apos;ve sent instructions on how to reset your password to <span className="font-semibold text-gray-700">aishauxui@gmail.com</span>
        </p>
      </div>
      
    </div>
  );
}

export default ForgetPassword