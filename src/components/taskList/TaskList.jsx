import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[45%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 w-full mt-10"
    >
      {data.tasks.map((ele, i) => {
        if (ele.active) {
          return <AcceptTask key={i} data={ele} />;
        }
        if (ele.newTask) {
          return <NewTask key={i} data={ele} />;
        }
        if (ele.completed) {
          return <CompleteTask key={i} data={ele} />;
        }
        if (ele.failed) {
          return <FailedTask key={i} data={ele} />;
        }
      })}
    </div>
  );
};

export default TaskList;
