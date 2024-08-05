import React from "react";

function ServiceItem({ service }) {
  return (
    <div
      className="bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 p-5
    hover:translate-y-2 transition transform rounded-md"
    >
      <div className="text-gray-600 dark:text-gray-300 w-6 h-6 mb-3">
        {service.icon}
      </div>
      <h1 className="font-semibold text-lg text-gray-600 dark:text-gray-200 mb-1">{service.title}</h1>
      <p className="text-md text-gray-600 dark:text-gray-300">{service.description}</p>
    </div>
  );
}

export default ServiceItem;
