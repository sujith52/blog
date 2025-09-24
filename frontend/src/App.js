// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/blogs/create" element={<CreateBlog />} />
        <Route path="/blogs/:id/edit" element={<EditBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
