import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

const LeadTable = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    axiosInstance.get("/leads").then((res) => setLeads(res.data));
  }, []);

  return (
    <div className="card">
      <h2>Leads</h2>
      <table>
        <thead>
          <tr><th>Name</th><th>Email</th><th>Phone</th><th>Company</th></tr>
        </thead>
        <tbody>
          {leads.map((l) => (
            <tr key={l._id}>
              <td>{l.name}</td><td>{l.email}</td><td>{l.phone}</td><td>{l.company}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadTable;
