import React from "react";
import LeadTable from "../components/LeadTable";
import ContactTable from "../components/ContactTable";
import DealTable from "../components/DealTable";

const Dashboard = ({ onLogout }) => {
  const username = localStorage.getItem("username");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    onLogout();
  };

  return (
    <div className="dashboard">
      <div className="topbar">
        <h1>Welcome, {username} ({role})</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <LeadTable />
      <ContactTable />
      <DealTable />
    </div>
  );
};

export default Dashboard;

