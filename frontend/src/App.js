import React, { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./styles/global.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));

  return (
    <>
      {loggedIn ? (
        <Dashboard onLogout={() => setLoggedIn(false)} />
      ) : (
        <Login onLogin={() => setLoggedIn(true)} />
      )}
    </>
  );
}

export default App;

