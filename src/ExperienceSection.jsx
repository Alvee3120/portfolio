import React from 'react';

// --- Reusable Single Skill Bar Component ---
// You can use this independently anywhere in your app!
const SkillBar = ({ name, value }) => {
  return (
    <div className="w-full mb-6 group">
      {/* Label */}
      <div className="flex justify-between mb-2">
        <span className="text-[#1E293B] font-bold text-lg group-hover:text-[#F57C20] transition-colors duration-300">
          {name}
        </span>
        <span className="text-slate-500 font-medium text-sm">{value}%</span>
      </div>
      
      {/* Progress Track */}
      <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
        {/* Progress Fill with Animation */}
        <div 
          className="bg-[#F57C20] h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(245,124,32,0.5)] relative"
          style={{ width: `${value}%` }}
        >
          {/* Subtle shine effect on the bar */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

// --- Main Experience Section Component ---
const ExperienceSection = () => {
  const leftSkills = [
    { name: 'Web Development', value: 85 },
    { name: 'Web Design', value: 92 },
    { name: 'SEO', value: 80 },
  ];

  const rightSkills = [
    { name: 'C Language', value: 75 },
    { name: 'C++', value: 80 },
    { name: 'Java Script', value: 88 },
  ];

  return (
    <section className="py-20 bg-[#FFFBF8]">
      <div className="container mx-auto px-4 md:px-16">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-2">
          <h3 className="text-[#F57C20] font-bold text-xl uppercase tracking-wide">
            Why Choose Me
          </h3>
          <h2 className="text-[#1E293B] text-4xl md:text-5xl font-extrabold">
            My Experience Area
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 max-w-5xl mx-auto">
          
          {/* Left Column */}
          <div className="space-y-2">
            {leftSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} value={skill.value} />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-2">
            {rightSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} value={skill.value} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;