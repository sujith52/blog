// src/pages/BlogList.jsx
import React, { useEffect, useState } from "react";
import axios from "../axios";
import BlogCard from "../components/Blogcard";


const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("/blogs/")
      .then(res => setBlogs(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>All Blogs</h2>
      {blogs.map(blog => <BlogCard key={blog.id} blog={blog} />)}
    </div>
  );
};

export default BlogList;
