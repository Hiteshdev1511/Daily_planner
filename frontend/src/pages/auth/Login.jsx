/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import Logo from "../../components/Logo";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../features/auth/authApiSlice";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/user/userSlice";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields },
  } = useForm({ defaultValues: { input: "", password: "" } });
  const [inputType, setInputType] = useState("username");
  const [showPassword, setShowPassword] = useState(false);
  const [login, { isLoading: isSubmitting }] = useLoginMutation();
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function checkInputType(input) {
    const result = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      input,
    );

    if (result) {
      setInputType("email");
    } else {
      setInputType("text");
    }
  }

  async function formSubmitHandler(data) {
    try {
      setError(null);

      const loginData = {
        ...(inputType==="email" ? { email:data.input } : {username:data.input}),
        password:data.password,
      };

      const response = await login(loginData).unwrap();
      const user = response.data.user;

      // Tokens are now handled via httpOnly cookies
      // User is already set in store by onQueryStarted in authApiSlice, 
      // but if we want to be explicit or if we removed that logic:
      // dispatch(setUser(user)); 
      // Actually authApiSlice handles dispatch(setUser), but let's leave it if needed or remove it.
      // The authApiSlice I wrote does dispatch setUser. So we don't strictly need it here, 
      // but it doesn't hurt to be safe or just rely on the slice.
      // Let's rely on the slice logic I wrote or just navigation.
      
      navigate("/");
    } catch (err) {
      const errorMessage =
        err.data?.message || "Login failed. Please try again.";
      setError(errorMessage);
      console.error("Login error:", err);
    }
  }

  return (
    <>
      <section className="bg-gray-50 min-h-screen flex flex-col justify-center">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto w-full md:w-auto">
          <Logo />
          <div className="w-full bg-white rounded-lg shadow dark:border mt-5 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                {isSubmitting ? "Processing..." : "Login"}
              </h1>
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                  <span className="block sm:inline">{error}</span>
                </div>
              )}
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(formSubmitHandler)}
              >
                {/* Email or Username */}
                <div>
                  <label
                    htmlFor="input"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Email or Username
                  </label>
                  <input
                    type={inputType}
                    className={`bg-gray-50 border text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                      touchedFields.input && errors.input
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="user@example.com"
                    disabled={isSubmitting}
                    {...register("input", {
                      required: "Password or Username is required",
                      validate: (input) => checkInputType(input)
                    })}
                  />
                  {errors.input && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.input.message}
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
                      touchedFields.password && errors.password
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  >
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder={showPassword ? "4fjisjg8Phf*%" : "••••••••"}
                      className="focus:outline-none h-full w-full bg-transparent"
                      disabled={isSubmitting}
                      {...register("password", {
                        required: "Password is required",
                        pattern: {
                          value: /^[^ \t]+$/,
                          message: "Password cannot contain whitespaces",
                        },
                        minLength: 8,
                      })}
                    />

                    <Eye
                      onClick={() => setShowPassword(!showPassword)}
                      color="grey"
                      size={"30"}
                      className="cursor-pointer"
                    />
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                      disabled={isSubmitting}
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-3 block text-sm text-slate-900"
                    >
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a
                      href="/auth/forgot-password"
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </button>
                <div className="flex flex-col h-25 items-center justify-between">
                  <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md w-full px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none cursor-pointer active:bg-gray-300">
                    <svg
                      className="h-6 w-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
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
              </form>
              <p className="text-sm font-light text-gray-500">
                Dont have an account{" "}
                <a
                  href="/auth/signup"
                  className="font-medium text-primary-600 hover:underline "
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
