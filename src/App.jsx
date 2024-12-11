import { useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import AuthenticationPage from "./pages/AuthenticationPage/AuthenticationPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AuthenticationPage />
      {/* add Router to direct to different pages */}
    </>
  );
}

export default App;
