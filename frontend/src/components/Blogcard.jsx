// src/components/BlogCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const Blogcard = ({ blog }) => (
  <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
    <h3>{blog.title}</h3>
    <p>{blog.content.substring(0, 100)}...</p>
    <Link to={`/blogs/${blog.id}`}>Read More</Link>
  </div>
);

export default Blogcard;
