import React from "react";

const Header = ({ data }) => {
  console.log(data);
  return (
    <div className="flex justify-between p-14 ">
      <h1 className="text-2xl ">
        Hello <br />
        <span className="text-3xl">{data.name}✋</span>
      </h1>
      <button className="bg-red-600 w-24 py-4 px-4 h-10 mt-6 flex justify-center items-center rounded-md">
        Log out
      </button>
    </div>
  );
};

export default Header;
