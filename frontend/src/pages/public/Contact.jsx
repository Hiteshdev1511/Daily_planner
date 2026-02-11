import { useState } from "react";
import {Logo} from "../../components/index";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);

    if (!name || !email || !message) return;

    // later connect backend here
    console.log({ name, email, message });

    alert("Message sent!");
    setName("");
    setEmail("");
    setMessage("");
    setSubmitted(false);
  }

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen">
        <Logo />

        <div className="w-full bg-white rounded-lg shadow mt-5 sm:max-w-md">
          <div className="p-6 space-y-4 sm:p-8">

            <h1 className="text-xl font-bold text-gray-900 md:text-2xl">
              Contact Us
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-50 border border-gray-300 rounded-lg block w-full p-2.5"
                />
                {submitted && !name && (
                  <p className="text-sm text-red-600 mt-1">Name required</p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 rounded-lg block w-full p-2.5"
                />
                {submitted && !email && (
                  <p className="text-sm text-red-600 mt-1">Email required</p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-gray-50 border border-gray-300 rounded-lg block w-full p-2.5"
                />
                {submitted && !message && (
                  <p className="text-sm text-red-600 mt-1">Message required</p>
                )}
              </div>

              <button className="w-full text-white bg-blue-500 hover:bg-blue-600 rounded-lg text-sm px-5 py-2.5">
                Send Message
              </button>

            </form>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
