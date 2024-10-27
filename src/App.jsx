import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInuser = localStorage.getItem("loggedInUser");

    if (loggedInuser) {
      const userData = JSON.parse(loggedInuser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const clearInput = (setUsername, setPassword) => {
    setUsername("");
    setPassword("");
  };

  const handleLogin = (email, password, setUsername, setPassword) => {
    if (authData) {
      const admin = authData.admin.find(
        (a) => a.email === email && a.password === password
      );
      if (admin) {
        setUser("admin");
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
        clearInput(setUsername, setPassword);
        return;
      }

      const employee = authData.employees.find(
        (e) => email === e.email && e.password === password
      );
      if (employee) {
        setLoggedInUserData(employee);
        setUser("employee");
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
        clearInput(setUsername, setPassword);
        return;
      }
    }

    alert("Invalid credentials");
  };

  if (!user) return <Login handleLogin={handleLogin} clearInput={clearInput} />;

  return user === "employee" ? (
    <EmployeeDashboard data={loggedInUserData} />
  ) : (
    <AdminDashboard />
  );
};

export default App;
