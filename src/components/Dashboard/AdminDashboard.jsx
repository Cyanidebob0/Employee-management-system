import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="w-screen h-screen bg-black flex flex-col">
      <Header changeUser={props.changeUser} />
      <div className="flex-grow flex flex-col">
        <CreateTask />
        <AllTask />
      </div>
    </div>
  );
};

export default AdminDashboard;
