import {Logo} from "../../components/index";

function About() {
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen">
        <Logo />

        <div className="w-full bg-white rounded-lg shadow mt-5 sm:max-w-md">
          <div className="p-6 space-y-4 sm:p-8">

            <h1 className="text-xl font-bold text-gray-900 md:text-2xl">
              About Us
            </h1>

            <p className="text-sm text-gray-600 leading-relaxed">
              Welcome to our platform! We help teams organize projects, manage
              tasks, and collaborate efficiently.
            </p>

            <p className="text-sm text-gray-600 leading-relaxed">
              Our goal is to provide a clean, fast, and intuitive workspace for
              students, developers, and professionals.
            </p>

            <div className="border-t pt-4 text-sm text-gray-500">
              Built with MERN Stack • Secure Auth • Real-time Collaboration
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
