// src/pages/CreateBlog.jsx
import React, { useState } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      // Use the configured axios instance path instead of full URL
      const token = localStorage.getItem("access_token");
      if (!token) {
        navigate("/login");
        return;
      }

      const res = await axios.post(
        "/blogs/create/",
        { title, content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Blog created:", res.data);
      navigate("/");
    } catch (err) {
      if (err.response) {
        setError(err.response.data);
        console.error("Server error:", err.response.data);
      } else if (err.request) {
        setError("Network error - no response received");
        console.error("Network error:", err.request);
      } else {
        setError("Error creating blog");
        console.error("Error:", err.message);
      }
    }
  };

  return (
    <div>
      <h2>Create New Blog</h2>
      {error && <div style={{ color: "red" }}>{JSON.stringify(error)}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Create Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;
