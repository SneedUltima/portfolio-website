import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 borber-b-4 border-[#05b8ff]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <p className="sm:text-right text-4xl font-bold">
              Hi there, I'm Dylan. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              Enthusiatic about life-long learning, I am passionate about web
              development and the endless possibilities it offers. I am always
              seeking new challenges and opportunities to grow and improve as a
              developer. Whether working on a new personal project or learning a
              new framework, I am committed to delivering high-quality web
              applications that meet the needs of users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
