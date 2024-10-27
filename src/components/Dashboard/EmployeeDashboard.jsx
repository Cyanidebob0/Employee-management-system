import React from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../taskList/TaskList";

const EmployeeDashboard = ({ data }) => {
  return (
    <div className=" w-screen h-screen bg-black">
      <div className="p-4 bg-[#1C1C1C] h-screen">
        <Header data={data} />
        <TaskListNumbers data={data} />
        <TaskList data={data} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
