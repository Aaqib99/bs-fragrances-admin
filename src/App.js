import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Orders from "./pages/Orders";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./Auth/Login.jsx";
import Profile from "./views/Profile.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin-dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/locations" element={<div></div>} />
        {/* <Route path="/profile" element={<div></div>} /> */}
        <Route path="/admin-profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
