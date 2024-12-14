import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes and Route
import "./App.css";

import SignUp from "./components/SignUp"; // Import SignUp component
import UserInputForm from "./components/UserInputForm"; // Import UserInputForm component
import SummaryPage from "./components/SummaryPage"; // Import SummaryPage component
import WorkoutGoalsPage from "./components/WorkoutGoalsPage"; // Import the new page

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Sweat & Syntax</h1>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/user-input" element={<UserInputForm />} />
          <Route path="/summary" element={<SummaryPage />} />
          <Route path="/workout-goals" element={<WorkoutGoalsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
