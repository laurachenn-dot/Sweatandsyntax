import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios"; // Import axios for API calls
import "../styles/LoginPage.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to store any error messages

  // Validate form fields
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  // Handle form submission
  async function handleSubmit(event) {
    event.preventDefault();

    // Reset error message
    setError("");

    try {
      // Make a POST request to your backend with email and password
      const response = await axios.post(
        "https://your-backend-url.com/api/login",
        {
          email,
          password,
        }
      );

      if (response.data.success) {
        // Handle successful login (store token or navigate)
        // You could store the JWT in localStorage or sessionStorage
        localStorage.setItem("authToken", response.data.token); // Example
        window.location.href = "/dashboard"; // Redirect user after successful login
      } else {
        // Show error if login fails
        setError("Invalid email or password. Please try again.");
      }
    } catch (err) {
      // Handle any errors, like network errors
      setError("An error occurred. Please try again.");
    }
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        {/* Show error message if there's one */}
        {error && <div className="error-message">{error}</div>}

        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}
