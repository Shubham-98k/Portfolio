import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioContributions from "../PortfolioContributions.jsx";
import avatarImg from "../../assets/pf.png";


const MY_PROJECTS = [
  {
    id: 1,
    title: "MetaWiper",
    tagline: "Privacy-focused image tool",
    description: "An advanced metadata extraction and stripping utility built to securely sanitize image payloads prior to storage optimization.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    media: "https://unsplash.com"
  },
  {
    id: 2,
    title: "Stockic",
    tagline: "High-throughput data engine",
    description: "A news streaming layout focusing on parsing complex telemetry infrastructure and optimizing real-time high-density visual grids.",
    tech: ["Next.js", "Go", "Redis", "PostgreSQL"],
    media: "https://unsplash.com"
  },
  {
    id: 3,
    title: "NeuraLeap",
    tagline: "Scalable profile analytics pipeline",
    description: "Data orchestration engines capable of executing structural processing over massive vector data pools with real-time feedback loops.",
    tech: ["Python", "Node.js", "FastAPI", "MongoDB"],
    media: "https://unsplash.com"
  }
];

const fadeVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeIn" } }
};

function HomePageLayout() {
  const [activeProject, setActiveProject] = useState(null);
  
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleExploreClick = () => {
    if (MY_PROJECTS.length > 0) {
      setActiveProject(MY_PROJECTS[0]);
    }
  };

  return (
    <div className={`flex h-screen overflow-hidden font-sans transition-colors duration-500 ${
      darkMode ? 'bg-zinc-900 text-zinc-100' : 'bg-white text-zinc-900'
    }`}>
      
      {/* Left Content Column */}
      <div className={`w-full md:w-1/2 overflow-y-auto border-r p-8 md:p-12 lg:p-16 flex flex-col justify-between transition-colors duration-500 ${
        darkMode ? 'bg-zinc-850 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
      }`}>
        
        <div className="max-w-xl mx-auto space-y-6 pt-6 w-full">
          
          <div className="flex justify-between items-center w-full pb-4">
            <span className="text-xs font-semibold tracking-widest text-amber-500 dark:text-amber-400 uppercase">
              {activeProject === null ? "Available for Projects" : "Project Case Study"}
            </span>
            
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`px-3 py-1.5 rounded-lg border transition-all text-xs font-medium shadow-sm cursor-pointer flex items-center gap-1 ${
                darkMode 
                  ? 'bg-zinc-800 border-zinc-700 text-zinc-200 hover:bg-zinc-750' 
                  : 'bg-white border-zinc-300 text-zinc-700 hover:bg-zinc-100'
              }`}
              aria-label="Toggle Theme Layout"
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>

          <div className="relative min-h-[300px]">
            <AnimatePresence mode="wait">
              {activeProject === null ? (
                <motion.div
                  key="bio-view"
                  variants={fadeVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="space-y-6"
                >
                  <h1 className={`text-4xl font-extrabold tracking-tight sm:text-5xl block ${
                    darkMode ? 'text-white' : 'text-zinc-900'
                  }`}>
                    Hi, I'm Shubham.
                  </h1>

                  <p className={`text-base leading-relaxed ${
                    darkMode ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                    I'm a Full Stack Developer
                  </p>

                  {/* Education Section Container */}
<div className="pt-12 border-t border-zinc-200 dark:border-zinc-800 space-y-6">
  <h2 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
    Education
  </h2>

  {/* Timeline Wrapper */}
  <div className="relative border-l border-zinc-300 dark:border-zinc-800 pl-5 ml-2 space-y-8">
    
    {/* Degree Item 1 */}
    <div className="relative">
      {/* Node Dot Anchor */}
      <span className="absolute -left-[25px] top-1.5 bg-white dark:bg-zinc-900 border border-amber-500 dark:border-amber-400 rounded-full h-3 w-3 shadow-[0_0_8px_rgba(251,191,36,0.3)]"></span>
      
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
        <div>
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Master of Computer Applications 
          </h3>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">
            Uttaranchal University
          </p>
        </div>
        <span className="text-xs font-mono text-zinc-500 dark:text-zinc-500 shrink-0">
          2026
        </span>
      </div>
      <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
        CGPA 9.6
      </p>
    </div>

      {/* Degree Item 1 */}
    <div className="relative">
      {/* Node Dot Anchor */}
      <span className="absolute -left-[25px] top-1.5 bg-white dark:bg-zinc-900 border border-amber-500 dark:border-amber-400 rounded-full h-3 w-3 shadow-[0_0_8px_rgba(251,191,36,0.3)]"></span>
      
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
        <div>
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Bachelor's of Computer Application
          </h3>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">
            Guru Gobind Singh Indraprastha University
          </p>
        </div>
        <span className="text-xs font-mono text-zinc-500 dark:text-zinc-500 shrink-0">
          2023
        </span>
      </div>
      <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
        CGPA 8.9
      </p>
    </div>

    {/* Degree Item 2 */}
    <div className="relative">
      {/* Node Dot Anchor */}
      <span className="absolute -left-[25px] top-1.5 bg-white dark:bg-zinc-900 border border-zinc-400 dark:border-zinc-600 rounded-full h-3 w-3"></span>
      
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
        <div>
          <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
            Central Board of Secondary Education (Class XII)
          </h3>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">
            92.5%
          </p>
        </div>
        <span className="text-xs font-mono text-zinc-500 dark:text-zinc-500 shrink-0">
          2020
        </span>
      </div>
    </div>

  </div>
</div>

                </motion.div>
              ) : (
                <motion.div
                  key={`project-${activeProject.id}`}
                  variants={fadeVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="space-y-6"
                >
                  <button 
                    onClick={() => setActiveProject(null)}
                    className="text-xs font-semibold tracking-widest text-amber-500 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    ← Back to Profile
                  </button>

                  <div className="space-y-2">
                    <span className={`text-xs font-medium tracking-wide uppercase ${
                      darkMode ? 'text-zinc-500' : 'text-zinc-400'
                    }`}>
                      {activeProject.tagline}
                    </span>
                    <h1 className={`text-4xl font-extrabold tracking-tight sm:text-5xl ${
                      darkMode ? 'text-white' : 'text-zinc-900'
                    }`}>
                      {activeProject.title}
                    </h1>
                  </div>

                  <p className={`text-base leading-relaxed ${
                    darkMode ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                    {activeProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {activeProject.tech.map((badge, idx) => (
                      <span 
                        key={idx} 
                        className={`px-2.5 py-1 rounded border text-xs font-medium ${
                          darkMode 
                            ? 'bg-zinc-800 border-zinc-700 text-zinc-300' 
                            : 'bg-white border-zinc-200 text-zinc-700'
                        }`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        <div className={`max-w-xl mx-auto w-full pt-8 border-t mt-12 ${
          darkMode ? 'border-zinc-800/60' : 'border-zinc-200'
        }`}>
          <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
            darkMode ? 'text-zinc-500' : 'text-zinc-400'
          }`}>Featured Projects</p>
          <div className="grid grid-cols-3 gap-3">
            {MY_PROJECTS.map((project) => (
              <button 
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`px-3 py-3 rounded-lg border text-xs font-bold transition-all text-center tracking-wide cursor-pointer ${
                  activeProject?.id === project.id
                    ? darkMode
                      ? "bg-zinc-800 border-amber-400 text-white shadow-md"
                      : "bg-zinc-200 border-amber-500 text-zinc-950 shadow-sm"
                    : darkMode
                      ? "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                      : "bg-white border-zinc-200 text-zinc-600 hover:border-zinc-300 hover:text-zinc-900"
                }`}
              >
                {project.title}
              </button>
            ))}
          </div>
        </div>

      </div>
       {/* Right Column: Dynamic background switching using dark: variants */}
<div className='hidden md:flex md:w-1/2 flex-col justify-start bg-zinc-50 dark:bg-zinc-900 p-8 lg:p-12 xl:p-16 border-l border-zinc-200 dark:border-zinc-800/60 overflow-y-auto transition-colors duration-300'>
  
  {/* Unified Vertical Container with deep spacing */}
  <div className="w-full max-w-xl mx-auto space-y-10 pt-10">

    {/* PROFILE PORTRAIT SECTION: Fully transparent floating cutout */}
<div className="flex flex-col items-center space-y-4">
  
  {/* CLEANED CONTAINER: Removed all borders, gradients, backgrounds, and background-based shadows */}
  <div className="relative w-48 h-48 flex items-center justify-center">
    <img 
      src={avatarImg} 
      alt="Shubham Portrait" 
      /* Clean layout rules allowing your transparent cutout to float freely */
      className="w-full h-full object-contain object-center scale-100 filter grayscale contrast-110 brightness-100 dark:brightness-95 transition-all" 
    />
  </div>
  
  {/* Architectural Tag Code */}
  <span className="text-[10px] font-mono tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
    // Shubham Pal
  </span>
</div>

    
    {/* 1. Open Source Activity Block */}
<div className="space-y-4">
  <div className="flex items-center justify-between">
    <h3 className="text-xs font-semibold tracking-widest text-zinc-500 dark:text-zinc-400 uppercase">
      My Contributions
    </h3>
  </div>
  
  {/* FIXED WRAPPER: Removed the background, border, padding, and shadows */}
  <div className="w-full flex items-center justify-center">
    <div className="w-full overflow-x-auto">
      <PortfolioContributions />
    </div>
  </div>
</div>


    {/* 2. Tools & Technologies Banner Block */}
    <div className="space-y-4">
      <h3 className="text-xs font-semibold tracking-widest text-zinc-500 dark:text-zinc-400 uppercase px-1">
        Tools & Technologies
      </h3>
      
      {/* Moving Banner Window Box: Dynamically themed background */}
      <div className="relative w-full overflow-hidden bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 rounded-xl py-4 flex select-none mask-gradient transition-colors duration-300">
        
        {/* Track 1 */}
        <div className="flex min-w-full shrink-0 justify-around items-center gap-8 animate-marquee whitespace-nowrap">
          {['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Git', 'MongoDB', 'PostgreSQL', 'Docker'].map((tech, idx) => (
            <span key={`t1-${idx}`} className="text-sm font-semibold text-zinc-700 dark:text-zinc-200 font-mono flex items-center">
              {tech} <span className="text-amber-500 ml-6">•</span>
            </span>
          ))}
        </div>

        {/* Track 2 */}
        <div className="flex min-w-full shrink-0 justify-around items-center gap-8 animate-marquee whitespace-nowrap" aria-hidden="true">
          {['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Git', 'MongoDB', 'PostgreSQL', 'Docker'].map((tech, idx) => (
            <span key={`t2-${idx}`} className="text-sm font-semibold text-zinc-700 dark:text-zinc-200 font-mono flex items-center">
              {tech} <span className="text-amber-500 ml-6">•</span>
            </span>
          ))}
        </div>

      </div>
    </div>

  </div>
</div>



    </div>
  );
}

export default HomePageLayout;
