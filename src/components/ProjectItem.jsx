import React from "react";

function ProjectItem({ project }) {
  return (
    <div className="bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden">
      <img
        src={project.imgUrl}
        alt={project.title}
        className="w-full h-36 md:48 object-cover"
      ></img>
      <div className="text-gray-600 dark:text-gray-300 p-5 w-full">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          <a href={project.url}>{project.title}</a>
        </h3>
        <p className="flex flex-wrap flex-row items-center justify-start text-xs md:text-sm gap-2">
          {project.tech.map((item) => (
            <span
              className="inline-block px-2 py-1 bg-slate-300 dark:bg-slate-900 rounded-md"
              key={item}
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default ProjectItem;
