import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLoclStorage, setLoclStorage } from "./utils/localStorage";

const App = () => {
  const [user, setUser] = useState("");

  const handleLogin = (username, password) => {
    if (username === "bhuvanu@gmail.com" && "123") {
      setUser("u");
    } else if (username === "bhuvana@gmail.com" && "123") {
      setUser("a");
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "u" ? <EmployeeDashboard /> : <AdminDashboard />}
    </>
  );
};

export default App;
