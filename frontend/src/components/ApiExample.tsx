import React from "react";
import { useQuery } from "@tanstack/react-query";

// This component demonstrates how you could integrate with your generated API client
// You would import your generated API client from the typescript-generator folder

const ApiExample: React.FC = () => {
  // Example of how you might use your generated API client with React Query
  const { data, isLoading, error } = useQuery({
    queryKey: ["api-example"],
    queryFn: async () => {
      // This is where you would use your generated API client
      // For now, we'll use a placeholder
      return { message: "Replace this with your generated API client" };
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;

  return (
    <div>
      <h3>API Integration Example</h3>
      <p>
        This component shows how to integrate your generated API client with
        React Query.
      </p>
      <pre
        style={{ background: "#f5f5f5", padding: "1rem", borderRadius: "4px" }}
      >
        {JSON.stringify(data, null, 2)}
      </pre>
      <div style={{ marginTop: "1rem" }}>
        <h4>Integration Steps:</h4>
        <ol>
          <li>
            Import your generated API client from the typescript-generator
            folder
          </li>
          <li>Create custom hooks that use the API client with React Query</li>
          <li>Use these hooks in your components for type-safe API calls</li>
        </ol>
      </div>
    </div>
  );
};

export default ApiExample;
