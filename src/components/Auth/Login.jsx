import React, { useState } from "react";

const Login = ({ handleLogin, clearInput }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    handleLogin(username, password, setUsername, setPassword);
  };

  return (
    <div
      className="relative w-screen h-screen bg-[url('/pictures/Picture-1.jpg')] bg-cover bg-center flex
    flex-col items-center justify-center"
    >
      <div className="bg-white h-[40vw] w-[30vw] rounded-xl">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl mt-8 text-flamingoPink mb-6">Login</h1>
          <form
            onSubmit={onSubmitHandler}
            className="w-full flex flex-col items-center gap-7 "
          >
            <div className="mt-10 ml-16 mr-16 text-flamingoPink ">
              <h1 className="font-bold">Username</h1>
              <input
                type="text"
                className="w-[22vw] border-b border-flamingoPink py-2 px-5 rounded-sm focus:outline-none text-xl text-black"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="mt-10 ml-16 mr-16 text-flamingoPink ">
              <h1 className="font-bold">Password</h1>
              <input
                type="password"
                className="w-[22vw] border-b border-flamingoPink py-2 px-5 rounded-sm focus:outline-none text-xl text-black
                "
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-[10vw] bg-flamingoPink text-white py-2 rounded-full hover:bg-pink-600 transition-colors duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
