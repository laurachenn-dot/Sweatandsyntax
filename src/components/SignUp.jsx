import React, { useState } from "react";
<<<<<<< HEAD
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
=======
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/SignUpPage.css"; // Import the CSS file

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate(); // Hook to navigate to another page

  // Capitalize first letter of name
  const handleNameChange = (e) => {
    let inputName = e.target.value;
    inputName =
      inputName.charAt(0).toUpperCase() + inputName.slice(1).toLowerCase(); // Capitalize first letter
    setName(inputName); // Update name state with the formatted name
  };

  const validateForm = () => {
>>>>>>> 06ddf12a6b59d6d3035b7470008d04d5d3242afb
    return (
      name.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      password === confirmPassword
    );
<<<<<<< HEAD
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    // Add logic to handle sign-up (e.g., sending data to backend or API)
    console.log("User signed up:", { name, email, password });
  }
=======
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      alert("Please fill in all fields correctly!");
      return;
    }

    // After successful sign-up, navigate to the UserInputForm page
    navigate("/user-input", {
      state: { name, email }, // Pass the name and email to the next page
    });
  };
>>>>>>> 06ddf12a6b59d6d3035b7470008d04d5d3242afb

  return (
    <div className="SignUp">
      <h2>Sign Up</h2>
<<<<<<< HEAD
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
=======
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange} // Use the handleNameChange function
            required
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={!validateForm()}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
>>>>>>> 06ddf12a6b59d6d3035b7470008d04d5d3242afb
