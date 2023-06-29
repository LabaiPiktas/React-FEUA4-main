import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeroImage from '../../components/HeroImage';
import './SingleUser.css';

const SingleUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [id]);

  return (
    <div className="user">
       <div className="hero-image">
        <HeroImage />
      </div>
      <h1>User Page</h1>
      {user && (
        <div className="user-card">
          <p className="user-info-label">User ID:</p>
          <p className="user-info-value">{id}</p>
          <p className="user-info-label">User Name:</p>
          <p className="user-info-value">{user.name}</p>
          <p className="user-info-label">User Username:</p>
          <p className="user-info-value">{user.username}</p>
          <p className="user-info-label">User Email:</p>
          <p className="user-info-value">{user.email}</p>
          <p className="user-info-label">User Phone:</p>
          <p className="user-info-value">{user.phone}</p>
          <p className="user-info-label">User Website:</p>
          <p className="user-info-value">{user.website}</p>
          <p className="user-info-label">User Company: </p>
          <p className="user-info-value">{user.company.name}</p>
          <p className="user-info-label">User Address: </p>
          <p className="user-info-value">
            {user.address.street}, {user.address.suite}, {user.address.suite}
          </p>
          <p className="user-info-label">User Zipcode: </p>
          <p className="user-info-value">{user.address.zipcode}</p>
        </div>
      )}
    </div>
  );
};

export default SingleUser;
