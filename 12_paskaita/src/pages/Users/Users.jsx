import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroImage from "../../components/HeroImage";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="hero">
      <div className="hero-image">
        <HeroImage />
      </div>
      <h1>Users Page</h1>
      <div className="users-cards">
        {users.map((user) => (
          <Link
            to={`/singleuser/${user.id}`}
            key={user.id}
            className="users-card"
          >
            <h3>{user.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Users;
