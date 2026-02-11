import { useState } from "react";
import Logo from "../../components/Logo";
import { useNavigate } from "react-router-dom";
import { Eye } from "lucide-react";
import { authAPI } from "../../services/apiEndpoints";

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const isCurrentPasswordInvalid = submitted && !currentPassword;
  const isPasswordInvalid = submitted && !password;
  const isConfPasswordInvalid =
    submitted && (!confPassword || password !== confPassword);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);

    if (
      !currentPassword.trim() ||
      !password.trim() ||
      !confPassword.trim() ||
      password !== confPassword
    ) {
      return;
    }

    try {
      setIsSubmitting(true);
      setError(null);

      await authAPI.changePassword({currentPassword, password});

      setSuccess(true);

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        "Failed to change password. Please try again.";

      setError(errorMessage);
      console.error("Change password error:", err);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen">
        <Logo />

        <div className="w-full bg-white rounded-lg shadow mt-5 sm:max-w-md">
          <div className="p-6 space-y-4 sm:p-8">
            <h1 className="text-xl font-bold text-gray-900 md:text-2xl">
              Change Password
            </h1>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                Password updated successfully!
              </div>
            )}

            {!success && (
              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Current Password */}
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Current Password
                  </label>
                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className={`bg-gray-50 border rounded-lg block w-full p-2.5 ${
                      isCurrentPasswordInvalid
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  {isCurrentPasswordInvalid && (
                    <p className="text-sm text-red-600 mt-1">
                      Current password required.
                    </p>
                  )}
                </div>

                {/* New Password */}
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    New Password
                  </label>

                  <div
                    className={`flex items-center bg-gray-50 border rounded-lg p-2.5 ${
                      isPasswordInvalid ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-transparent w-full focus:outline-none"
                    />

                    <Eye
                      size={24}
                      className="cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  </div>

                  {isPasswordInvalid && (
                    <p className="text-sm text-red-600 mt-1">
                      New password required.
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                    className={`bg-gray-50 border rounded-lg block w-full p-2.5 ${
                      isConfPasswordInvalid
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />

                  {isConfPasswordInvalid && (
                    <p className="text-sm text-red-600 mt-1">
                      Passwords do not match.
                    </p>
                  )}
                </div>

                <button
                  disabled={isSubmitting}
                  className="w-full text-white bg-blue-500 hover:bg-blue-600 rounded-lg text-sm px-5 py-2.5 disabled:opacity-50"
                >
                  {isSubmitting ? "Updating..." : "Change Password"}
                </button>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChangePassword;
