import { useState } from "react";
import Logo from "../../components/Logo";
import { useNavigate } from "react-router-dom";
import { authAPI } from "../../services/apiEndpoints";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();
  const isEmailInvalid = submitted && !email;

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);

    if (!email) {
      return;
    }

    try {
      setIsSubmitting(true);
      setError(null);

      await authAPI.forgotPassword(email);
      setSuccess(true);

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        "Failed to send reset email. Please try again.";
      setError(errorMessage);
      console.error("Forgot password error:", err);
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
                Forgot Password
              </h1>

              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                  <span className="block sm:inline">{error}</span>
                </div>
              )}

              {success && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
                  <span className="block sm:inline">
                    Password reset email sent! Check your inbox. Redirecting to
                    login...
                  </span>
                </div>
              )}

              {!success && (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 md:space-y-6"
                >
                  <p className="text-sm text-gray-600">
                    Enter your email address and we'll send you a link to reset
                    your password.
                  </p>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`bg-gray-50 border text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                        isEmailInvalid ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="your@email.com"
                      required
                      disabled={isSubmitting}
                    />
                    {isEmailInvalid && (
                      <p className="mt-1 text-sm text-red-600">
                        Please enter a valid email address.
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Reset Link"}
                  </button>

                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      Remember your password?{" "}
                      <a
                        href="/login"
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
                      href="/login"
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      Back to Login
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

export default ForgotPassword;
