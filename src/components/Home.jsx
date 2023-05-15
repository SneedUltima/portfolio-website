import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className=" text-white">Hi, my name is</p>
        <h1 className=" text-4xl sm:text-7xl font-bold text-[#05b8ff]">
          Dylan Cobham
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          I'm a Full Stack Developer
        </h2>
        <p className="text-white py-4 max-w-[700px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          aut quisquam illum natus sunt quae consequuntur ipsam non inventore
          dolor impedit, autem quas culpa aspernatur.
        </p>
        <div>
          <button className="text-[#0a192f] group bg-[#05b8ff] border-2 border-[#05b8ff] px-6 py-3 my-2 flex items-center font-bold hover:bg-[#0a192f] hover:text-[#05b8ff] duration-300">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
