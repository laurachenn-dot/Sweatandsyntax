import { useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import AuthenticationPage from "./pages/AuthenticationPage/AuthenticationPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthenticationPage />} />
        <Route path="/login" element={<Login />} />
        {/* You can add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
