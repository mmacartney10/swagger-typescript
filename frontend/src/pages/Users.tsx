import React from "react";
import { usePeople, Person } from "../hooks/usePeople";

const Users: React.FC = () => {
  const { data: users, isLoading, error } = usePeople();

  if (isLoading) {
    return (
      <div>
        <h1>Users</h1>
        <p>Loading users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Users</h1>
        <p style={{ color: "red" }}>
          Error loading users:{" "}
          {error instanceof Error ? error.message : "Unknown error"}
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1>Users</h1>
      <p>
        This page demonstrates React Query with the generated API client from
        typescript-generator (/api/people).
      </p>

      <div style={{ marginTop: "2rem" }}>
        <h2>User List:</h2>
        <div
          style={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          }}
        >
          {users?.map((user: Person) => (
            <div
              key={user.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "1rem",
                backgroundColor: "#f9f9f9",
              }}
            >
              <h3>{user.name}</h3>
              <p>
                <strong>Age:</strong> {user.age}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>City:</strong> {user.city}
              </p>
              <p>
                <strong>Occupation:</strong> {user.occupation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
