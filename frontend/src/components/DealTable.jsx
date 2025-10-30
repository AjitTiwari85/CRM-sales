import React, { useEffect, useState, useCallback } from "react";
import axiosInstance from "../api/axiosInstance";

const DealTable = () => {
  const [deals, setDeals] = useState([]);
  const [search, setSearch] = useState("");
  const [stage, setStage] = useState("");

  const fetchDeals = useCallback(async () => {
    try {
      const params = {};
      if (search) params.search = search;
      if (stage) params.stage = stage;

      const res = await axiosInstance.get("/deals", { params });
      setDeals(res.data);
    } catch (err) {
      console.error("Error fetching deals:", err);
    }
  }, [search, stage]); // ✅ dependencies go here

  useEffect(() => {
    fetchDeals();
  }, [fetchDeals]); // ✅ now safe and clean

  return (
    <div className="card">
      <h2>Deals</h2>
      <div className="filter-bar">
        <input 
          placeholder="Search deals..." 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
        <select value={stage} onChange={(e) => setStage(e.target.value)}>
          <option value="">All</option>
          <option value="New">New</option>
          <option value="In Progress">In Progress</option>
          <option value="Won">Won</option>
          <option value="Lost">Lost</option>
        </select>
        <button onClick={fetchDeals}>Filter</button>
      </div>

      <table>
        <thead>
          <tr><th>Title</th><th>Amount</th><th>Stage</th></tr>
        </thead>
        <tbody>
          {deals.length > 0 ? (
            deals.map((d) => (
              <tr key={d._id}>
                <td>{d.title}</td>
                <td>{d.amount}</td>
                <td>{d.stage}</td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="3">No deals found</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DealTable;
