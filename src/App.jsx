import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState("");

  const authData = useContext(AuthContext);

  const handleLogin = (email, password) => {
    if (
      authData?.admin?.find((a) => a.email === email && a.password === password)
    ) {
      setUser("a");
    } else if (
      authData &&
      authData.employees.find((e) => email == e.email && e.password == password)
    ) {
      setUser("u");
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
