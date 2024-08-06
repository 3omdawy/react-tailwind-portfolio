import React from "react";

function HeroSection() {
  return (
    <div id="hero" className="flex items-center justify-center flex-col py-20">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl mb-1 md:mb-2 text-blue-700 dark:text-blue-300 font-semibold">
          Hi, I am Emad 👋
        </h1>
        <p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">
          Software Architect / Technical Leader with 13 years of experience
        </p>
        <a
          href="#projects"
          className="inline-block px-8 py-3 border-transparent text-base font-medium rounded-md
           text-white bg-blue-700 hover:bg-blue-800 md:text-md"
        >
          See Projects
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
