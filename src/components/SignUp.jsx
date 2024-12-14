import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/SignUpPage.css"; // Create a separate CSS file for styling if needed

export default function SignUp() {
  const [name, setName] = useState(""); // State for the name input
  const [email, setEmail] = useState(""); // State for the email input
  const [password, setPassword] = useState(""); // State for the password input
  const [confirmPassword, setConfirmPassword] = useState(""); // State for the confirm password input

  // Validate the form inputs
  function validateForm() {
    return (
      name.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      password === confirmPassword
    );
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    // Add logic to handle sign-up (e.g., sending data to backend or API)
    console.log("User signed up:", { name, email, password });
  }

  return (
    <div className="SignUp">
      <h2>Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        {/* Name Input */}
        <Form.Group size="lg" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        {/* Email Input */}
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        {/* Password Input */}
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        {/* Confirm Password Input */}
        <Form.Group size="lg" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>

        {/* Submit Button */}
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Sign Up
        </Button>
      </Form>
    </div>
  );
}
