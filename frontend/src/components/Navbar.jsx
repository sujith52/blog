// src/components/Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    navigate("/login");
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      {!token && <Link to="/signup">Signup</Link>}
      {!token && <Link to="/login">Login</Link>}
      {token && <Link to="/blogs/create">Create Blog</Link>}
      {token && <button onClick={handleLogout}>Logout</button>}
    </nav>
  );
};

export default Navbar;
