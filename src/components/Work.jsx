import React from "react";
import WorkImg from "../assets/projects/workImg.jpeg";
import RealEstateImg from "../assets/projects/realestate.jpg";
import RushApp from "../assets/projects/RushApp.jpg";
import Cryptoscape from "../assets/projects/Cryptoscape.jpg";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1800px] mx-auto p-4 flex flex-col w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 borber-b-4 border-[#05b8ff]">
            Work
          </p>
          <p className="py-4">// Check out some of my projects</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${RushApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-white tracking-wider">
                E-Commerce Store
              </span>
              <div className="pt-8 text-center">
                <a href="https://comfy-sawine-23f707.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-slate-100">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/SneedUltima/E-Commerce-App">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-slate-100">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Cryptoscape})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-white tracking-wider">
                Crypto Database Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://helpful-dieffenbachia-34da37.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-slate-100">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/SneedUltima/Crypto-Database-Application">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-slate-100">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-slate-100">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-slate-100">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
