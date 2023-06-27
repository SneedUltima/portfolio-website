import React from "react";
import mailImg from "../assets/mail.svg";

const Contact = () => {
  return (
    <div className="flex items-center">
      <div
        name="contact"
        className="bg-[#0a192f] w-full h-screen flex justify-center items-center p-4 md:pl-20"
      >
        <form
          method="POST"
          action="https://formsubmit.co/b2644f972d5ccd83c31dc373127c4ffb"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 borber-b-4 border-[#05b8ff] text-gray-300">
              Contact
            </p>
            <p className="py-4 text-gray-300">
              // Submit the form below or send an email to
              dylan.cobham@yahoo.com.au
            </p>
          </div>
          <input
            className="p-2 bg-blue-200"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
          <input
            className="my-4 p-2 bg-blue-200"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <textarea
            className="p-2 bg-blue-200"
            name="message"
            id="message"
            rows="10"
            placeholder="Message"
            required
          ></textarea>
          <button
            type="submit"
            className="text-[#0a192f] group bg-[#05b8ff] border-2 border-[#05b8ff] px-6 py-3 my-8 font-bold hover:bg-[#0a192f] hover:text-[#05b8ff] duration-300 mx-auto flex items-center"
          >
            Let's Work Together
          </button>
        </form>
      </div>
      <div className="bg-[#0a192f] h-screen w-full sm:flex items-center justify-center hidden md:pr-20">
        <img src={mailImg} alt="" />
      </div>
    </div>
  );
};

export default Contact;
