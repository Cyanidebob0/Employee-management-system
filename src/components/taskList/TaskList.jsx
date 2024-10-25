import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-[45%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 w-full mt-10"
    >
      <div className="flex-shrink-0 h-full w-[320px] bg-red-200 p-5 rounded-xl shadow-md">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-500 text-white text-sm px-3 py-1 rounded-md font-medium shadow-sm">
            High
          </h3>
          <h4 className="text-gray-700 text-sm font-light">20-20-2024</h4>
        </div>

        <h2 className="mt-4 text-2xl font-semibold text-black leading-snug">
          Make YouTube Video
        </h2>

        <p className="text-sm mt-3 text-black leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          sunt, voluptatibus unde veritatis deleniti soluta!
        </p>
      </div>
    </div>
  );
};

export default TaskList;
