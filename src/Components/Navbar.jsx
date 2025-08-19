import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // for hamburger icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#fdf9f8]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="\src\assets\mylogo.png"
              alt="Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-xl font-medium ">
            <a href="#home" className="text-orange-500">
              Home
            </a>
            <a href="#services" className="text-[#0c1b4d] hover:text-orange-500">
              Services
            </a>
            <a href="#work" className="text-[#0c1b4d] hover:text-orange-500">
              Work
            </a>
            <a href="#contact" className="text-[#0c1b4d] hover:text-orange-500">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0c1b4d] hover:text-orange-500 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#fdf9f8]">
          <div className="px-4 pt-2 pb-4 space-y-2 text-base font-medium">
            <a href="#home" className="block text-orange-500">
              Home
            </a>
            <a
              href="#services"
              className="block text-[#0c1b4d] hover:text-orange-500"
            >
              Services
            </a>
            <a
              href="#work"
              className="block text-[#0c1b4d] hover:text-orange-500"
            >
              Work
            </a>
            <a
              href="#contact"
              className="block text-[#0c1b4d] hover:text-orange-500"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
