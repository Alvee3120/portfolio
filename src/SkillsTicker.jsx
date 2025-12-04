import React from 'react';

const SkillsTicker = () => {
  // Skill Data with specific brand colors and SVG paths
  const skills = [
    {
      name: 'JavaScript',
      color: 'text-yellow-600',
      bg: 'bg-yellow-50',
      icon: (
        <svg viewBox="0 0 48 48" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 6H42V42H6V6Z" fill="#F7DF1E"/>
          <path d="M28 35C28 36.8 26.5 38 24.5 38C22.5 38 21.5 37 21 35.5L22.5 33.5C23 34.5 23.5 35.5 24.5 35.5C25.5 35.5 25.5 34.8 25.5 34.2V25H28V35ZM38 35C38 37 36 38 33.5 38C31.5 38 30 37 29.5 36L31 34C31.5 34.8 32 35.5 33.2 35.5C34.2 35.5 34.8 35 34.8 34.2C34.8 33 33 32.8 32 31.5C31.2 30.5 31.5 28.5 33.5 28C35.5 27.8 36.8 28.5 37.5 29L36 31C35.5 30.5 35 30 33.8 30C33 30 32.5 30.5 32.5 31C32.5 32 34.5 32 35.2 33C36.5 34.2 38 34 38 35Z" fill="black"/>
        </svg>
      )
    },
    {
      name: 'React',
      color: 'text-cyan-500',
      bg: 'bg-cyan-50',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="2" fill="#06B6D4"/>
          <g stroke="#06B6D4" strokeWidth="1.5">
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)"/>
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
          </g>
        </svg>
      )
    },
    {
      name: 'Tailwind',
      color: 'text-sky-500',
      bg: 'bg-sky-50',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.0002 6.5C12.0002 3.5 15.5 2.5 17.5 4C19.5 5.5 19.5 9.5 15.5 10.5C12.5 11.25 11.5 14.5 14.5 16.5C17.5 18.5 20.5 15.5 20.5 15.5C20.5 15.5 20.5 19.5 17.5 21C14.5 22.5 11.5 20.5 10.5 17.5C9.5 14.5 12.5 13.5 12.0002 6.5Z" fill="#38BDF8"/>
          <path d="M3.5 6.5C3.5 3.5 7 2.5 9 4C11 5.5 11 9.5 7 10.5C4 11.25 3 14.5 6 16.5C9 18.5 12 15.5 12 15.5C12 15.5 12 19.5 9 21C6 22.5 3 20.5 2 17.5C1 14.5 4 13.5 3.5 6.5Z" fill="#38BDF8"/>
        </svg>
      )
    },
    {
      name: 'Node.js',
      color: 'text-green-600',
      bg: 'bg-green-50',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
           <path d="M12 2L4 6.5V17.5L12 22L20 17.5V6.5L12 2Z" fill="#83CD29"/>
           <path d="M12 2L4 6.5V17.5L12 22" fill="#83CD29"/>
           <path d="M11 11H13V15.5H16" stroke="white" strokeWidth="2"/>
        </svg>
      )
    },
    {
      name: 'MongoDB',
      color: 'text-green-700',
      bg: 'bg-green-50',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
           <path d="M12 22C12 22 5 16 5 10C5 6 8 2 12 2C16 2 19 6 19 10C19 16 12 22 12 22Z" fill="#13AA52"/>
           <path d="M12 22V2" stroke="#116149" strokeWidth="1"/>
        </svg>
      )
    },
    {
      name: 'MySQL',
      color: 'text-blue-700',
      bg: 'bg-blue-50',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M2 12C2 12 5 8 12 8C19 8 22 12 22 12C22 12 19 16 12 16C5 16 2 12 2 12Z" fill="#00758F" opacity="0.8"/>
           <circle cx="14" cy="11" r="2" fill="white"/>
        </svg>
      )
    },
    {
      name: 'Git',
      color: 'text-red-500',
      bg: 'bg-red-50',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
           <path d="M12 2L2 12L12 22L22 12L12 2Z" fill="#F05032"/>
           <circle cx="12" cy="8" r="2" fill="white"/>
           <circle cx="9" cy="14" r="2" fill="white"/>
           <circle cx="15" cy="14" r="2" fill="white"/>
           <path d="M12 8V14M12 14L9 14M12 14L15 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      color: 'text-slate-900',
      bg: 'bg-slate-100',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.59 9.5 21.28 9.5 21.02C9.5 20.79 9.5 20.18 9.5 19.38C6.71 19.99 6.12 18.04 6.12 18.04C5.67 16.88 5.01 16.57 5.01 16.57C4.1 15.95 5.08 15.97 5.08 15.97C6.09 16.04 6.62 17.01 6.62 17.01C7.52 18.55 8.97 18.11 9.54 17.85C9.63 17.2 9.89 16.76 10.18 16.51C7.95 16.26 5.61 15.4 5.61 11.58C5.61 10.49 6 9.59 6.65 8.89C6.55 8.64 6.2 7.6 6.75 6.23C6.75 6.23 7.59 5.96 9.5 7.25C10.3 7.03 11.16 6.92 12.02 6.92C12.88 6.92 13.73 7.03 14.54 7.25C16.45 5.96 17.29 6.23 17.29 6.23C17.84 7.6 17.49 8.64 17.39 8.89C18.04 9.59 18.43 10.49 18.43 11.58C18.43 15.41 16.08 16.25 13.84 16.5C14.2 16.81 14.53 17.43 14.53 18.37C14.53 19.72 14.52 20.81 14.52 21.02C14.52 21.29 14.68 21.6 15.2 21.5C19.16 20.17 22 16.42 22 12C22 6.48 17.52 2 12 2Z" fill="#181717"/>
        </svg>
      )
    },
    {
      name: 'Canva',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="url(#paint0_linear)"/>
          <path d="M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z" stroke="white" strokeWidth="2"/>
          <defs>
            <linearGradient id="paint0_linear" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00C4CC"/>
              <stop offset="1" stopColor="#7D2AE8"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      name: 'Python',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8 2 7 4 7 4H10V6H6C4 6 3 8 3 10V13H5V10H14V5C14 3 12 2 12 2Z" fill="#3776AB"/>
          <path d="M12 22C16 22 17 20 17 20H14V18H18C20 18 21 16 21 14V11H19V14H10V19C10 21 12 22 12 22Z" fill="#FFD343"/>
        </svg>
      )
    },
    {
      name: 'C++',
      color: 'text-blue-800',
      bg: 'bg-blue-100',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M11 7C11 7 8 8 7 12C6 16 9 17 11 17M14 10V14M12 12H16M19 10V14M17 12H21" stroke="#00599C" strokeWidth="2" strokeLinecap="round"/>
           <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="#00599C" strokeWidth="1.5"/>
        </svg>
      )
    },
  ];

  return (
    <div className="w-full bg-[#FFFBF8] py-16 overflow-hidden">
      {/* Title */}
      
      {/* Infinite Scroll Container */}
      <div className="relative w-full overflow-hidden">
        {/* Gradients to hide edges (optional, but adds polish) */}
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#F3F4F6] to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#F3F4F6] to-transparent z-10"></div>

        {/* The track needs to be wide enough to hold all items.
          We duplicate the list to create the seamless loop.
          Animation defined in styles below.
        */}
        <div className="flex animate-scroll hover:pause w-max">
          {/* First Set */}
          <div className="flex gap-8 mx-4">
            {skills.map((skill, index) => (
              <SkillItem key={`s1-${index}`} skill={skill} />
            ))}
          </div>
          
          {/* Second Set (Duplicate) */}
          <div className="flex gap-8 mx-4">
            {skills.map((skill, index) => (
              <SkillItem key={`s2-${index}`} skill={skill} />
            ))}
          </div>

          {/* Third Set (Duplicate for extra smoothness on wide screens) */}
          <div className="flex gap-8 mx-4">
            {skills.map((skill, index) => (
              <SkillItem key={`s3-${index}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>

      {/* Inline Styles for the Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%); /* Move 1/3 because we have 3 sets */
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

// Single Skill Pill Component
const SkillItem = ({ skill }) => (
  <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer min-w-max">
    <div className="flex-shrink-0">
      {skill.icon}
    </div>
    <span className={`font-semibold text-lg ${skill.color}`}>
      {skill.name}
    </span>
  </div>
);

export default SkillsTicker;