import React, { createContext, useEffect, useState } from "react";
import { getLoclStorage, setLoclStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLoclStorage();
    const { employees, admin } = getLoclStorage();
    setUserData({ employees, admin });
  }, []);

  const data = getLoclStorage();
  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
