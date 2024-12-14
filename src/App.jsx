import { useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import AuthenticationPage from "./pages/AuthenticationPage/AuthenticationPage";
import PersonalPage from "./pages/PersonalPage/PersonalPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PersonalPage />
      {/* add Router to direct to different pages */}
    </>
  );
}

export default App;
