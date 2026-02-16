import { useState } from "react";
import {Logo} from "../../components/index";
import { userAPI } from "../../services/apiEndpoints";
import { useNavigate } from "react-router-dom";

function UpdateProfile() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const isFirstnameInvalid = submitted && !firstname;
  const isLastnameInvalid = submitted && !lastname;
  const isGenderInvalid = submitted && !gender;
  const isDobInvalid = submitted && !dob;

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);

    if (!firstname || !lastname || !gender || !dob) return;

    try {
      setIsSubmitting(true);
      setError(null);

      await userAPI.updateProfile({
        firstname,
        lastname,
        gender,
        dob,
      });

      setSuccess(true);

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to update profile. Please try again."
      );
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
              Update Profile
            </h1>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                Profile updated successfully!
              </div>
            )}

            {!success && (
              <form onSubmit={handleSubmit} className="space-y-4">

                {/* First Name */}
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    First Name
                  </label>
                  <input
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    className={`bg-gray-50 border rounded-lg block w-full p-2.5 ${
                      isFirstnameInvalid
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  {isFirstnameInvalid && (
                    <p className="text-sm text-red-600 mt-1">
                      First name required.
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Last Name
                  </label>
                  <input
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    className={`bg-gray-50 border rounded-lg block w-full p-2.5 ${
                      isLastnameInvalid ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {isLastnameInvalid && (
                    <p className="text-sm text-red-600 mt-1">
                      Last name required.
                    </p>
                  )}
                </div>

                {/* Gender */}
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Gender
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className={`bg-gray-50 border rounded-lg block w-full p-2.5 ${
                      isGenderInvalid ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>

                  {isGenderInvalid && (
                    <p className="text-sm text-red-600 mt-1">
                      Gender required.
                    </p>
                  )}
                </div>

                {/* DOB */}
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className={`bg-gray-50 border rounded-lg block w-full p-2.5 ${
                      isDobInvalid ? "border-red-500" : "border-gray-300"
                    }`}
                  />

                  {isDobInvalid && (
                    <p className="text-sm text-red-600 mt-1">
                      Date of birth required.
                    </p>
                  )}
                </div>

                <button
                  disabled={isSubmitting}
                  className="w-full text-white bg-blue-500 hover:bg-blue-600 rounded-lg text-sm px-5 py-2.5 disabled:opacity-50"
                >
                  {isSubmitting ? "Updating..." : "Update Profile"}
                </button>

              </form>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}

export default UpdateProfile;
