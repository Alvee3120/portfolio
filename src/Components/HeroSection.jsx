import React from "react";
import Button from "./Button"; // your button component
import { FaAward, FaClipboardList, FaHeadset } from "react-icons/fa";

export default function HeroSection() {
  return (
    <>
      <div>
        {/* Hero */}
        <div><div className="w-full  flex flex-col items-center bg-[#fffafa] py-12">
        {/* Container (same width for Hero + Stats) */}
        <div className="w-full max-w-7xl px-6 md:px-12">

          {/* Hero Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">

            {/* Left Content */}
            <div className="text-center md:text-left max-w-xl">
              <h3 className="text-[#FD6E0A] font-bold text-2xl">Hi I'm</h3>
              <h1 className="text-5xl md:text-8xl font-bold text-[#15295F] mt-2">
                Alvee
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-[#15295F] mt-4">
                Web Developer & UI/UX Designer
              </h2>
              <p className="text-[#15295F] text-lg mt-4 leading-relaxed">
                I’m a web designer skilled in WordPress and UI/UX, working as a
                Junior Designer at Tech4Realty. I’m also a CSE student at IUBAT,
                currently learning the MERN stack to become a full-stack developer.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-6">
                <Button className="text-white">Download Cv</Button>
                <Button className="bg-white text-[#FD6E0A] border-[#FD6E0A] hover:bg-[#FD6E0A] ">
                  Contact
                </Button>
              </div>
            </div>

            {/* Right Content (Image with background shapes) */}
            <div className="relative flex justify-center items-center">

              <img
                src="./public/assets/HeroImage.png"
                alt="profile"
                className="relative w-[650px] h-full object-cover rounded-lg z-10"
              />
            </div>
          </div>

          {/* Stats Section */}

        </div>
      </div></div>

        {/* Stat */}
        <div>

<div className="w-full max-w-7xl px-6 md:px-12  items-center">
        <div className="flex flex-col md:flex-row justify-around items-center bg-white rounded-2xl shadow-lg mt-12 px-6 py-6 gap-8">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FD6E0A] text-white text-2xl shadow-md">
              <FaAward />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0B132A]">2 year working</h3>  
              <p className="text-[#FD6E0A] font-semibold">Experience</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FD6E0A] text-white text-2xl shadow-md">
              <FaClipboardList />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0B132A]">54+ projects</h3>
              <p className="text-[#FD6E0A] font-semibold">Completed</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FD6E0A] text-white text-2xl shadow-md">
              <FaHeadset />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0B132A]">Online 24/7</h3>
              <p className="text-[#FD6E0A] font-semibold">Supports</p>
            </div>
          </div>
        </div>
      </div>

        </div>
      </div>
    </>
  );
}
