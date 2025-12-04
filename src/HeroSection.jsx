import React from 'react';
import { FileText, Headphones, Award } from 'lucide-react';
import Navbar from './Navbar';
import StatusBar from './StatusBar';
import SkillsTicker from './SkillsTicker';
import ExperienceSection from './ExperienceSection';

const HeroSection = () => {
  return (
    <>
    <div className="min-h-auto w-full bg-[#FDF8F7] font-sans text-slate-800 relative overflow-hidden">

      {/* ⭐ FULL WIDTH SECTION, CONTENT MAX 1280PX */}
      <div className="max-w-7xl mx-auto px-2 md:px-16 py-6 relative z-10">

        <Navbar />

        {/* HERO CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT */}
          <div className="space-y-6 text-center md:text-left z-20">
            <h3 className="text-orange-500 text-xl font-bold">Hi I'm</h3>
            <h1 className="text-[#1E293B] text-6xl md:text-8xl font-extrabold leading-tight">
              Alvee
            </h1>
            <h2 className="text-[#2D3748] text-2xl md:text-3xl font-bold">
              Web Developer and Designer
            </h2>
            <p className="text-slate-500 text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
              Experienced web developer proficient in front-end technologies, creating visually stunning and functional websites.
            </p>
            
            <div className="flex gap-6 justify-center md:justify-start pt-4 mb-8">
              <button className="bg-[#F57C20] text-white px-8 py-3 shadow-2xl rounded-lg font-medium  hover:bg-orange-600 transition active:scale-95">
                Download CV
              </button>
              <button className="border-2 border-[#F57C20] text-slate-700 shadow-2xl px-8 py-3 rounded-lg font-medium hover:bg-orange-50 transition active:scale-95">
                Contact
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center items-end h-auto">
            <img 
              src="./src/media/portfolio.jpg"
              alt="Alvee Profile"
              className="relative z-10 h-full object-cover"
            />
          </div>
        </div>

        {/* STATS BAR */}
        

      </div>
    </div>
     <div className=''>
       <StatusBar />
     </div>
      
    <div className=''>
       <ExperienceSection />
        <SkillsTicker />
     </div>
     </>
  );
};

export default HeroSection;
