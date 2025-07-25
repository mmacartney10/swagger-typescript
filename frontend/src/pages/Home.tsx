import React from "react";
import ApiExample from "../components/ApiExample";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to React App</h1>
      <p>
        This is a React TypeScript application with React Query and React
        Router.
      </p>
      <div style={{ marginTop: "2rem" }}>
        <h2>Features:</h2>
        <ul>
          <li>TypeScript for type safety</li>
          <li>React Router for single page navigation</li>
          <li>TanStack Query (React Query) for data fetching</li>
          <li>Modern React with functional components and hooks</li>
        </ul>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <ApiExample />
      </div>
    </div>
  );
};

export default Home;
