import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

const ContactTable = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axiosInstance.get("/contacts").then((res) => setContacts(res.data));
  }, []);

  return (
    <div className="card">
      <h2>Contacts</h2>
      <table>
        <thead>
          <tr><th>Name</th><th>Email</th><th>Phone</th><th>Position</th></tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr key={c._id}>
              <td>{c.name}</td><td>{c.email}</td><td>{c.phone}</td><td>{c.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactTable;
