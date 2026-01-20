import React from "react";
// import { Routes, Route } from "react-router-dom";
import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import { Home, About, Users } from "./pages";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
