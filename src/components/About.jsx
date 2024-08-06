import React from "react";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20">
      <div className="w-full md:w-6/12">
        <SectionTitle>About Me</SectionTitle>
        <p className="text-md text-gray-600 dark:text-gray-300">
          Software Architect / Technical Leader - Building products that solve
          problems and delight users (16 embedded projects with top OEMs, and an
          amazing website with more than 1k pages) 🚀
        </p>
        <a
          className="block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 underline
          hover:text-blue-700 dark:hover:text-blue-300"
          href="mailto:emad-ashraf@hotmail.com"
        >
          emad-ashraf@hotmail.com
        </a>
      </div>
      <img
        className="w-full md:w-6/12 rounded-lg object-cover"
        src="https://avatars.githubusercontent.com/u/10769610?v=4"
        alt=""
      />
    </div>
  );
}

export default About;
