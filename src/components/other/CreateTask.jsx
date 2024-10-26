import React from "react";

const CreateTask = () => {
  return (
    <div className="flex-grow bg-black flex items-center justify-center ">
      <form className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="mb-6">
          <h3 className="text-gray-300 text-lg font-semibold mb-2">
            Task Title
          </h3>
          <input
            type="text"
            placeholder="Create a task"
            className="w-full p-3 rounded-md bg-gray-700 text-gray-200 placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
        <div className="mb-6 md:row-span-2">
          <h3 className="text-gray-300 text-lg font-semibold mb-2">
            Description
          </h3>
          <textarea
            cols="30"
            rows="6"
            className="w-full p-3 rounded-md bg-gray-700 text-gray-200 placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Describe the task"
          ></textarea>
        </div>
        <div className="mb-6">
          <h3 className="text-gray-300 text-lg font-semibold mb-2">Date</h3>
          <input
            type="date"
            className="w-full p-3 rounded-md bg-gray-700 text-gray-200 outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
        <div className="mb-6">
          <h3 className="text-gray-300 text-lg font-semibold mb-2">
            Assign to
          </h3>
          <input
            type="text"
            placeholder="Employee name"
            className="w-full p-3 rounded-md bg-gray-700 text-gray-200 placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
        <div className="mb-6">
          <h3 className="text-gray-300 text-lg font-semibold mb-2">Category</h3>
          <input
            type="text"
            placeholder="design, dev, etc"
            className="w-full p-3 rounded-md bg-gray-700 text-gray-200 placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
        <button className="w-full bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700 transition md:col-span-2">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
