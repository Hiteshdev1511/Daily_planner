import homeImage from "../../assets/home.jpg";
import {  StickyVideo, Templates } from "../../components/index.js";

function Home() {
  const bgImage =
    "https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_2240/https%3A%2F%2Fwww.todoist.com%2Fstatic%2Fhome%2Fcustomer-logos-bg%402x.png";

  return (
    <>
        <div className="flex p-20 justify-center">
          <div className="flex flex-col justify-evenly w-110 h-70 mt-4">
            <h1 className="font-bold text-5xl">Clarity, finally.</h1>
            <span className="text-xl leading-9 text-gray-700">
              Join 50+ million professionals who simplify work and life with the
              world&apos;s #1 to-do list app
            </span>
            <span className="text-gray-500 border-gray-400 border-1 px-3 rounded w-fit">
              374K+ ★★★★★ reviews
            </span>
            <button className="cursor pointer w-fit bg-blue-600 text-white p-2 px-3 rounded-xl font-bold active:bg-blue-700">
              Upgrade to Pro
            </button>
          </div>
          <div className="h-fit">
            <img src={homeImage} alt="error" className="w-200" />
          </div>
        </div>

        {/* Reviews by famous orgs */}
        <div
          style={{
            backgroundImage: `url('${bgImage}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
          className="h-70 flex justify-center items-center font-mono"
        >
          <div className="flex flex-col text-wrap w-60 mx- items-center">
            <span>&quot;Simple, straightforward, and super powerful&quot;</span>
            <span className="font-sans font-bold mt-3">The Verge</span>
          </div>
          <div className="flex flex-col text-wrap w-60 mx-8 items-center">
            <span>&quot;The best to-do list app on the market&quot;</span>
            <span className="font-sans font-bold mt-3">PC MAG</span>
          </div>
          <div className="flex flex-col text-wrap w-60 mx-8">
            <span>&quot;Nothing short of stellar&quot;</span>
            <span className="font-sans font-bold mt-3">Tech Radar</span>
          </div>
        </div>

        {/* Scrollable Divs with Static video */}
        <StickyVideo />
        <Templates />
    </>
  );
}

export default Home;
