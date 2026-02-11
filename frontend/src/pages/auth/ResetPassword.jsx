import { useState, useEffect } from "react";
import Logo from "../../components/Logo";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Eye } from "lucide-react";
import { authAPI } from "../../services/apiEndpoints";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const navigate = useNavigate();

  const isPasswordInvalid = submitted && !password;
  const isConfPasswordInvalid =
    submitted && (!confPassword || password !== confPassword);

  useEffect(() => {
    if (!token) {
      setError(
        "Invalid or missing reset token. Please request a new password reset.",
      );
    }
  }, [token]);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);

    if (!password.trim() || !confPassword.trim() || password !== confPassword) {
      return;
    }

    if (!token) {
      setError("Invalid token. Please request a new password reset.");
      return;
    }

    try {
      setIsSubmitting(true);
      setError(null);

      await authAPI.resetPassword({token, password});
      setSuccess(true);

      setTimeout(() => {
        navigate("/auth/login");
      }, 2000);
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        "Failed to reset password. Please try again.";
      setError(errorMessage);
      console.error("Reset password error:", err);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Logo />
          <div className="w-full bg-white rounded-lg shadow dark:border mt-5 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Reset Password
              </h1>

              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                  <span className="block sm:inline">{error}</span>
                </div>
              )}

              {success && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
                  <span className="block sm:inline">
                    Password reset successful! Redirecting to login...
                  </span>
                </div>
              )}

              {!success && !error && (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 md:space-y-6"
                >
                  <p className="text-sm text-gray-600">
                    Enter your new password below.
                  </p>

                  {/* New Password */}
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      New Password
                    </label>
                    <div
                      className={`flex items-center justify-between bg-gray-50 border text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 ${
                        isPasswordInvalid ? "border-red-500" : "border-gray-300"
                      }`}
                    >
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder={showPassword ? "password123" : "••••••••"}
                        className="focus:outline-none h-full w-full bg-transparent"
                        disabled={isSubmitting}
                      />
                      <Eye
                        onClick={() => setShowPassword(!showPassword)}
                        color="grey"
                        size={30}
                        className="cursor-pointer"
                      />
                    </div>
                    {isPasswordInvalid && (
                      <p className="mt-1 text-sm text-red-600">
                        Password is required.
                      </p>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label
                      htmlFor="confPassword"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confPassword"
                      value={confPassword}
                      onChange={(e) => setConfPassword(e.target.value)}
                      placeholder="••••••••"
                      className={`bg-gray-50 border text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                        isConfPasswordInvalid
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      disabled={isSubmitting}
                    />
                    {isConfPasswordInvalid && (
                      <p className="mt-1 text-sm text-red-600">
                        Passwords do not match.
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Resetting..." : "Reset Password"}
                  </button>

                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      <a
                        href="/auth/login"
                        className="text-blue-600 hover:underline font-semibold"
                      >
                        Back to Login
                      </a>
                    </p>
                  </div>
                </form>
              )}

              {success && (
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    <a
                      href="/auth/login"
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      Back to Login
                    </a>
                  </p>
                </div>
              )}

              {error && !success && (
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    <a
                      href="/auth/forgot-password"
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      Request a new reset link
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ResetPassword;
