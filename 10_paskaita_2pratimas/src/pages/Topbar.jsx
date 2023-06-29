import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Topbar.css"

const Topbar = () => {
  return (
    <div className="topbar">
      <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/users" activeClassName="active">
        Users
      </NavLink>
      
    </div>
  );
};

export default Topbar;
