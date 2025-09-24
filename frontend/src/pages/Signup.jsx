import axios from "../axios";
import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await axios.post("/signup/", formData);
      console.log("User created:", res.data);
      alert("Signup successful!");
    } catch (err) {
      console.error(err.response?.data);
      setError(err.response?.data); // Show backend validation errors
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      {error && (
        <pre style={{ color: "red" }}>{JSON.stringify(error, null, 2)}</pre>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
