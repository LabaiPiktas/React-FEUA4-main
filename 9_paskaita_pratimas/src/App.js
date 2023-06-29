import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then((data) => setUsers(data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Hero />
      <h1>Portfolio</h1>
      <p>Čia galima pamatyti mūsų vartotojų informacija. Jauskitės laisvai.</p>
      <div className="avatar-container">
        {users.map((user) => (
          <div key={user.id} className="avatar-item">
            <img src={user.avatar} alt="Avatar" />
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
