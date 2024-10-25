import React from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../taskList/TaskList";

const EmployeeDashboard = () => {
  return (
    <div className=" w-screen h-screen bg-black">
      <div className="p-4 bg-[#1C1C1C] h-screen">
        <Header />
        <TaskListNumbers />
        <TaskList />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
