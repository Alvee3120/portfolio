import { useState } from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
export default function LandingPage() {
  const [activeTab, setActiveTab] = useState("education");

  return (
    
    <div className="font-sans text-gray-800">
      <Navbar />
      <HeroSection />
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold text-orange-500">Alvee</h1>
        <nav className="space-x-6 text-lg font-medium">
          <a href="#" className="hover:text-orange-500">Home</a>
          <a href="#" className="hover:text-orange-500">Services</a>
          <a href="#" className="hover:text-orange-500">Work</a>
          <a href="#" className="hover:text-orange-500">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center p-10 bg-orange-50">
        <div>
          <p className="text-orange-500 text-lg font-semibold">Hi I'm</p>
          <h2 className="text-5xl font-bold text-blue-900">Alvee</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-lg">
            Web Developer & UI/UX Designer skilled in WordPress and UI/UX. Also a CSE student currently learning MERN stack.
          </p>
          <div className="mt-6 flex space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg">Download CV</button>
            <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-2 rounded-lg">Contact</button>
          </div>
        </div>
        <div className="flex justify-center mt-6 md:mt-0">
          <div className="w-64 h-64 bg-gray-200 rounded-full" />
        </div>
      </section>

      {/* Stats */}
      <section className="flex justify-around p-6 bg-white shadow-md -mt-10 rounded-2xl mx-6 relative z-10">
        <div className="text-center">
          <p className="text-2xl font-bold text-orange-500">2 year</p>
          <p>Working Experience</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-orange-500">24+</p>
          <p>Projects Completed</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-orange-500">Online 24/7</p>
          <p>Supports</p>
        </div>
      </section>

      {/* Services */}
      <section className="p-10">
        <h3 className="text-2xl font-bold mb-6">Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Digital Marketing", "Web Development", "UI/UX Design"].map((service, i) => (
            <div key={i} className="bg-white shadow rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-gray-200 mx-auto mb-4 rounded-full" />
              <h4 className="font-bold text-lg mb-2">{service}</h4>
              <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="p-10 bg-orange-50">
        <h3 className="text-2xl font-bold text-center mb-6">Why Choose Me - My Experience Area</h3>
        <div className="max-w-3xl mx-auto space-y-4">
          {["HTML", "CSS", "JavaScript", "React", "WordPress"].map((skill, i) => (
            <div key={i}>
              <p className="font-medium">{skill}</p>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-orange-500 h-2 rounded-full w-3/4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section className="p-10">
        <h3 className="text-2xl font-bold text-center mb-6">Portfolio - My Amazing Works</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="w-full h-40 bg-gray-200 rounded-lg" />
          ))}
        </div>
      </section>

      {/* About Me with Tabs */}
      <section className="p-10 bg-orange-50">
        <h3 className="text-2xl font-bold text-center mb-6">About Me</h3>
        <div className="flex justify-center space-x-6 mb-6">
          {[
            { id: "education", label: "Education" },
            { id: "bio", label: "Bio" },
            { id: "contact", label: "Contact" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full ${
                activeTab === tab.id ? "bg-orange-500 text-white" : "bg-white text-orange-500 border"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center bg-white shadow p-6 rounded-lg">
          {activeTab === "education" && (
            <p>Secondary & Higher Secondary Education details go here.</p>
          )}
          {activeTab === "bio" && (
            <p>A short bio about yourself goes here. Showcase personality and skills.</p>
          )}
          {activeTab === "contact" && (
            <p>You can contact me at example@email.com or phone number.</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 bg-gray-900 text-center text-white">
        <p>Copyright © 2025 alvee | Powered by alvee</p>
      </footer>
    </div>
  );
}
