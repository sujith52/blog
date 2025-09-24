// src/pages/EditBlog.jsx
import React, { useEffect, useState } from "react";
import axios from "../axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBlog = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/blogs/${id}/`)
      .then(res => {
        setTitle(res.data.title);
        setContent(res.data.content);
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("access_token");
    axios.put(`/blogs/${id}/edit/`, { title, content }, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(() => navigate(`/blogs/${id}`))
    .catch(err => console.error(err.response.data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
      <textarea value={content} onChange={e => setContent(e.target.value)} required />
      <button type="submit">Update Blog</button>
    </form>
  );
};

export default EditBlog;
