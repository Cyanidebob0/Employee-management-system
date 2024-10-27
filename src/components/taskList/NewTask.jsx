import React from "react";

const AcceptTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[320px] bg-yellow-200 p-5 rounded-xl shadow-md">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-500 text-white text-sm px-3 py-1 rounded-md font-medium shadow-sm">
          {data.category}
        </h3>
        <h4 className="text-gray-700 text-sm font-light">{data.date}</h4>
      </div>

      <h2 className="mt-4 text-2xl font-semibold text-black leading-snug">
        {data.title}
      </h2>

      <p className="text-sm mt-3 text-black leading-relaxed">
        {data.description}
      </p>
      <div className="mt-6 flex justify-center space-x-2">
        <button className="bg-green-500 text-white py-1 px-2  rounded-md hover:bg-green-600 transition duration-300 shadow-md">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
