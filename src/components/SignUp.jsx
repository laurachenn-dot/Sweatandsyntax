import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/SignUpPage.css"; // Import the CSS file

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); // State to handle errors (if any)

  const navigate = useNavigate(); // Hook to navigate to another page

  // Capitalize first letter of name
  const handleNameChange = (e) => {
    let inputName = e.target.value;
    inputName =
      inputName.charAt(0).toUpperCase() + inputName.slice(1).toLowerCase(); // Capitalize first letter
    setName(inputName); // Update name state with the formatted name
  };

  const validateForm = () => {
    return (
      name.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      password === confirmPassword
    );
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      alert("Please fill in all fields correctly!");
      return;
    }

    // Prepare user data
    const userData = { name, email, password };

    try {
      // Send data to backend
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData), // Send the user data in the request body
      });

      const result = await response.json();

      if (response.ok) {
        // After successful registration, navigate to the UserInputForm page
        navigate("/user-input", {
          state: { name, email }, // Pass the name and email to the next page
        });
      } else {
        // Handle any error from the backend
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setError("Network error. Please try again later.");
    }
  };

  return (
    <div className="SignUp">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange} // Use the handleNameChange function
            required
          />
        </div>

        {/* Email Input */}
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password Input */}
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Confirm Password Input */}
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {/* Display Error */}
        {error && <div className="error-message">{error}</div>}

        {/* Submit Button */}
        <button type="submit" disabled={!validateForm()}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
