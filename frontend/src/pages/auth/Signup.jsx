import { useState } from "react";
import Logo from "../../components/Logo";
import { Eye } from "lucide-react";
import verifyInput from "../../utils/verifyInput";
import { useIsUsernameUnique } from "../../hooks/useIsUsernameUnique";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // 1. Add a state to track if form submission has been attempted
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const { data: isUsernameUnique } = useIsUsernameUnique(username);

  // Helper variables for validation checks
  const isEmailInvalid = submitted && !email;
  const isUsernameInvalid = submitted && !username;
  const isPasswordInvalid = submitted && !password;
  const isConfPasswordInvalid =
    submitted && (!confPassword || password !== confPassword);

  function formSubmitHandler() {
    // 2. Set submitted to true on any submission attempt
    setSubmitted(true);

    // Your existing validation logic
    if (
      verifyInput({ email, username, confPassword, password }, "signin") &&
      isUsernameUnique
    ) {
      try {
        console.log("Verified");
        setIsSubmitting(true);
        setError(null);
        console.log(
          "simulate an api call Asynchromous function and send to the app page"
        );
        navigate("/");
      } catch (error) {
        setError(error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      console.log("Validation failed.");
    }
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Logo />
          <div className="w-full bg-white rounded-lg shadow dark:border mt-5 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                {isSubmitting ? "Processing..." : "Sign up"}
              </h1>
              <div className="space-y-4 md:space-y-6">
                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    // 3. Conditionally apply error styles based on state
                    className={`bg-gray-50 border text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                      isEmailInvalid ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="name@company.com"
                    required={true}
                  />
                  {/* 4. Conditionally render the error message */}
                  {isEmailInvalid && (
                    <p className="mt-1 text-sm text-red-600">
                      Please enter a valid email address.
                    </p>
                  )}
                </div>

                {/* Username */}
                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Username
                  </label>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    className={`bg-gray-50 border text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                      isUsernameInvalid || (!isUsernameUnique && username != "")
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="Unique username"
                    required
                  />
                  {!isUsernameUnique && username != "" && (
                    <p className="mt-1 text-sm text-red-600">
                      Username is already taken.
                    </p>
                  )}
                  {isUsernameInvalid && (
                    <p className="text-sm text-red-600">
                      Username cannot be empty.
                    </p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <div
                    className={`flex items-center justify-between bg-gray-50 border text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 ${
                      isPasswordInvalid ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type={showPassword ? "text" : "password"}
                      // 3. Conditionally apply error styles based on state

                      placeholder={
                        showPassword ? "igq48#$P2asd" : "************"
                      }
                      required={true}
                    />
                    <Eye
                      size={"30"}
                      color="grey"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  </div>
                  {/* 4. Conditionally render the error message */}
                  {isPasswordInvalid && (
                    <p className="mt-1 text-sm text-red-600">
                      Password field can not be empty
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Confirm Password
                  </label>
                  <div
                    className={`flex items-center justify-between bg-gray-50 border text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 ${
                      isConfPasswordInvalid
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  >
                    <input
                      onChange={(e) => setConfPassword(e.target.value)}
                      type="password"
                      // 3. Conditionally apply error styles based on state

                      placeholder="************"
                      required={true}
                    />
                  </div>
                  {/* 4. Conditionally render the error message */}
                  {isConfPasswordInvalid && (
                    <p className="mt-1 text-sm text-red-600">
                      Password field can not be empty
                    </p>
                  )}
                </div>

                {/* ... (button and other fields) */}
                <button
                  onClick={formSubmitHandler}
                  className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Sign up
                </button>

                <div className="flex flex-col h-25 items-center justify-between">
                  <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md w-full px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none cursor-pointer active:bg-gray-300">
                    <svg
                      className="h-6 w-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      // eslint-disable-next-line react/no-unknown-property
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="-0.5 0 48 48"
                      version="1.1"
                    >
                      <g
                        id="Icons"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Color-"
                          transform="translate(-401.000000, -860.000000)"
                        >
                          <g
                            id="Google"
                            transform="translate(401.000000, 860.000000)"
                          >
                            <path
                              d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                              id="Fill-1"
                              fill="#FBBC05"
                            >
                              {" "}
                            </path>
                            <path
                              d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                              id="Fill-2"
                              fill="#EB4335"
                            >
                              {" "}
                            </path>
                            <path
                              d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                              id="Fill-3"
                              fill="#34A853"
                            >
                              {" "}
                            </path>
                            <path
                              d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                              id="Fill-4"
                              fill="#4285F4"
                            >
                              {" "}
                            </path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span>Continue with Google</span>
                  </button>

                  <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md w-full px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none cursor-pointer active:bg-gray-300">
                    <svg
                      className="h-6 w-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      // eslint-disable-next-line react/no-unknown-property
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 48 48"
                      version="1.1"
                    >
                      <g
                        id="Icons"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Color-"
                          transform="translate(-200.000000, -160.000000)"
                          fill="#4460A0"
                        >
                          <path
                            d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z"
                            id="Facebook"
                          ></path>
                        </g>
                      </g>
                    </svg>
                    <span>Continue with Facebook</span>
                  </button>
                </div>

                <p className="text-sm font-light text-gray-500">
                  Already have an account{" "}
                  <a
                    href="/login"
                    className="font-medium text-primary-600 hover:underline "
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
