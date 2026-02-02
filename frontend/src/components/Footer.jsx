import { Download, Youtube, Linkedin, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="bg-blue-50 h-fit">
      <div className="h-100 flex flex-col items-center justify-center">
        <h1 className="font-bold text-4xl text-center px-44  leading-10 w-260">
          Gain calmness and clarity with the world’s most beloved productivity
          app
        </h1>
        <h2 className="text-xl text-gray-500 my-4">
          374000+ ★★★★★ reviews on Google Play and App Store{" "}
        </h2>
        <button className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white p-1.5 rounded-xl text-xl w-40">
          Upgrade to pro
        </button>
        <Link
          to="#"
          className="flex items-center p-1  text-gray-600 mt-2 gap-1.5 hover:bg-gray-300 hover:rounded hover:text-black"
        >
          <Download size="18" />
          Download apps
        </Link>
      </div>
      <hr className="text-gray-300" />
      <div className="flex justify-around h-150 pt-10">
        <div className="flex flex-col text-wrap w-100">
          <Logo margin="mx-0" color="#000000" />
          <h2 className="text-xl text-wrap leading-8 mt-4 w-90">
            Join millions of people who organize work and life with iTask
          </h2>
        </div>
        <div className="flex justify-around h-140 mt-2 w-180">
          <ul className="">
            <h3 className="font-bold">Features</h3>
            <li>How It Works</li>
            <li>For Teams</li>
            <li>Pricing</li>
            <li>Templates</li>
          </ul>
          <ul>
            <h3 className="font-bold">Resources</h3>
            <li>Download Apps</li>
            <li>Help Center</li>
            <li>Productivity Methods</li>
            <li>Integrations</li>
            <li>Channel Partners</li>
            <li>Developer API</li>
            <li>Status</li>
          </ul>
          <ul>
            <h3 className="font-bold">Company</h3>
            <li>About Us</li>
            <li>Careers</li>
            <li>Inspiration Hub</li>
            <li>Press</li>
            <li>Twist</li>
          </ul>
          <ul>
            <Youtube />
            <Linkedin />
            <Instagram />
            <Facebook />
          </ul>
        </div>
      </div>
      <div className="bg-blue-50 h-fit flex items-center justify-around pb-3">
        <span className="w-100 flex items-center justify-between text-gray-500">
          <Link className="hover:underline">Security |</Link>
          <Link className="hover:underline">Privacy |</Link>
          <Link className="hover:underline">Terms |</Link>
          <Link className="hover:underline">Cookie preferences</Link>
          &copy; iTask Inc.
        </span>
        <select className="bg-gray-200 p-1 rounded w-30 hover:bg-gray-300">
          <option value="EN">English</option>
          <option value="ES">Espanol</option>
          <option value="HI">Hindi</option>
        </select>
      </div>
    </footer>
  );
}

export default Footer;
