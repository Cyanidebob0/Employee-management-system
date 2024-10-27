import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);
  return (
    <div id="tasklist" className="bg-black flex flex-col h-[35%]">
      <div id="tasklist" className="bg-black flex flex-col h-[35%]">
        <div className="flex items-center justify-between bg-zinc-700 p-4 w-full mb-4 rounded-md h-20">
          <h2 className="text-white font-bold text-xl flex-1 text-center">
            Employee Name
          </h2>
          <h3 className="text-white font-bold text-xl flex-1 text-center">
            New Task
          </h3>
          <h5 className="text-white font-bold text-xl flex-1 text-center">
            Active Task
          </h5>
          <h5 className="text-white font-bold text-xl flex-1 text-center">
            Completed
          </h5>
          <h5 className="text-white font-bold text-xl flex-1 text-center mr-4">
            Failed
          </h5>
        </div>
      </div>
      <div className="flex-grow overflow-auto">
        {authData.employees.map((ele) => {
          return (
            <div
              className="flex items-center justify-between h-16 bg-zinc-900 p-4 w-full mb-4 rounded-md"
              key={ele.id}
            >
              <h2 className="text-white text-xl font-normal flex-1">
                {ele.name}
              </h2>
              <h3 className="text-blue-400 font-normal text-xl flex-1 text-center">
                {ele.taskNumbers.active}
              </h3>
              <h5 className="text-yellow-400 font-normal text-xl flex-1 text-center">
                {ele.taskNumbers.newTask}
              </h5>
              <h5 className="text-green-400 font-normal text-xl flex-1 text-center">
                {ele.taskNumbers.completed}
              </h5>
              <h5 className="text-red-500 font-normal text-xl flex-1 text-center">
                {ele.taskNumbers.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
