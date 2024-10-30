import React from "react";

const Header = (props) => {
  const logOut = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
  };

  return (
    <div className="flex justify-between p-14 ">
      <h1 className="text-2xl ">
        Hello <br />
        <span className="text-3xl">
          {props.data ? `${props.data.firstName} ✋` : "Admin ✋"}
        </span>
      </h1>
      <button
        onClick={logOut}
        className="bg-red-600 w-24 py-4 px-4 h-10 mt-6 flex justify-center items-center rounded-md"
      >
        Log out
      </button>
    </div>
  );
};

export default Header;
