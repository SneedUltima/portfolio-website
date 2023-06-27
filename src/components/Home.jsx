import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import screens from "../assets/screens.svg";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1600px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="flex flex-row gap-10 justify-center items-center">
          <div>
            <p className=" text-white">Hi, my name is</p>
            <h1 className=" text-4xl sm:text-7xl font-bold text-[#05b8ff]">
              Dylan Cobham
            </h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              I'm a Full Stack Developer
            </h2>
            <p className="text-white py-4 max-w-[700px]">
              Welcome to my portfoilo site! I'm an Australian web developer who
              is always eager to learn something new. Feel free to check out
              some my recent personal projects below.
            </p>
            <div>
              <Link
                classname="content-nav"
                to="work"
                smooth={true}
                duration={500}
                offset={-50}
              >
                <button className="text-[#0a192f] group bg-[#05b8ff] border-2 border-[#05b8ff] px-6 py-3 my-2 flex items-center font-bold hover:bg-[#0a192f] hover:text-[#05b8ff] duration-300">
                  View Work
                  <span className="group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight className="ml-3 " />
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div>
            <img src={screens} className="w-[1000px] hidden lg:flex" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
