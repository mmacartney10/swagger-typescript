import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Users from "./pages/Users";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/users" element={<Users />} /> */}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
