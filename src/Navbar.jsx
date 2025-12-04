import React from 'react';
import { Facebook, Instagram, Phone } from 'lucide-react';

const Navbar = () => {
  const menuItems = ['Home', 'Services', 'Work', 'Blog', 'Contact'];

  return (
    <nav className="w-full bg-[#FDF8F7] py-5">
      {/* Centered content wrapper */}
      <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Logo */}
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-1 bg-yellow-200 transform -skew-x-12 rounded-sm opacity-80" />
          <h1 className="relative text-3xl font-extrabold text-slate-800 px-2">
            Alvee
          </h1>
        </div>

        {/* Nav Links */}
        <ul className="flex gap-8 font-medium text-slate-600 text-lg">
          {menuItems.map((item) => (
            <li
              key={item}
              className="hover:text-orange-500 cursor-pointer transition-colors duration-200"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="#" className="bg-blue-600 text-white p-2 rounded-md hover:opacity-80 transition hover:-translate-y-1">
            <Facebook size={20} fill="currentColor" />
          </a>
          <a href="#" className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white p-2 rounded-md hover:opacity-80 transition hover:-translate-y-1">
            <Instagram size={20} />
          </a>
          <a href="#" className="bg-green-500 text-white p-2 rounded-md hover:opacity-80 transition hover:-translate-y-1">
            <Phone size={20} fill="currentColor" />
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
