import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
alert(
  "Admin Username: admin@me.com\n" +
    "Password: 123\n\n" +
    "First Employee Username: employee1@example.com\n" +
    "Password: 123\n\n" +
    "Note: The rest of the employee usernames follow the same pattern (e.g., employee2@example.com, employee3@example.com) and can be adjusted by changing the numbers."
);
createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
