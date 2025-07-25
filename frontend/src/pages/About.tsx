import React from "react";

const About: React.FC = () => {
  return (
    <div>
      <h1>About</h1>
      <p>
        This application demonstrates a modern React setup with TypeScript,
        React Router for client-side routing, and TanStack Query for efficient
        data fetching and caching.
      </p>
      <div style={{ marginTop: "2rem" }}>
        <h2>Technology Stack:</h2>
        <ul>
          <li>
            <strong>React 18</strong> - Modern React with concurrent features
          </li>
          <li>
            <strong>TypeScript</strong> - Static type checking
          </li>
          <li>
            <strong>React Router</strong> - Declarative routing
          </li>
          <li>
            <strong>TanStack Query</strong> - Server state management
          </li>
          <li>
            <strong>CSS3</strong> - Modern styling
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
