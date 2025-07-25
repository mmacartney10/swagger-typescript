import React, { useState } from "react";
import {
  usePeople,
  useCreatePerson,
  useUpdatePerson,
  useDeletePerson,
  Person,
} from "../hooks/usePeople";

const PeopleManager: React.FC = () => {
  const { data: people, isLoading, error } = usePeople();
  const createPersonMutation = useCreatePerson();
  const updatePersonMutation = useUpdatePerson();
  const deletePersonMutation = useDeletePerson();

  const [newPerson, setNewPerson] = useState<Omit<Person, "id">>({
    name: "",
    age: 0,
    email: "",
    city: "",
    occupation: "",
  });

  const [editingPerson, setEditingPerson] = useState<Person | null>(null);

  const handleCreatePerson = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createPersonMutation.mutateAsync(newPerson);
      setNewPerson({ name: "", age: 0, email: "", city: "", occupation: "" });
    } catch (error) {
      console.error("Failed to create person:", error);
    }
  };

  const handleUpdatePerson = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPerson) return;

    try {
      await updatePersonMutation.mutateAsync(editingPerson);
      setEditingPerson(null);
    } catch (error) {
      console.error("Failed to update person:", error);
    }
  };

  const handleDeletePerson = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this person?")) {
      try {
        await deletePersonMutation.mutateAsync(id);
      } catch (error) {
        console.error("Failed to delete person:", error);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="loading">
        <h2>Loading People...</h2>
        <p>Fetching data using the generated API client...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <h2>Error</h2>
        <p>Failed to load people: {error.message || "Unknown error"}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2>People Manager</h2>
      <p>
        This component demonstrates full CRUD operations using the generated API
        client with React Query.
      </p>

      {/* Create Person Form */}
      <div
        style={{
          marginBottom: "2rem",
          padding: "1rem",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <h3>Add New Person</h3>
        <form
          onSubmit={handleCreatePerson}
          style={{ display: "grid", gap: "1rem", maxWidth: "400px" }}
        >
          <input
            type="text"
            placeholder="Name"
            value={newPerson.name}
            onChange={(e) =>
              setNewPerson({ ...newPerson, name: e.target.value })
            }
            required
          />
          <input
            type="number"
            placeholder="Age"
            value={newPerson.age || ""}
            onChange={(e) =>
              setNewPerson({ ...newPerson, age: parseInt(e.target.value) || 0 })
            }
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={newPerson.email}
            onChange={(e) =>
              setNewPerson({ ...newPerson, email: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="City"
            value={newPerson.city}
            onChange={(e) =>
              setNewPerson({ ...newPerson, city: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="Occupation"
            value={newPerson.occupation}
            onChange={(e) =>
              setNewPerson({ ...newPerson, occupation: e.target.value })
            }
            required
          />
          <button
            type="submit"
            disabled={createPersonMutation.isPending}
            style={{
              padding: "0.5rem",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
            }}
          >
            {createPersonMutation.isPending ? "Adding..." : "Add Person"}
          </button>
        </form>
        {createPersonMutation.error && (
          <p style={{ color: "red", marginTop: "0.5rem" }}>
            Error:{" "}
            {createPersonMutation.error.message || "Failed to create person"}
          </p>
        )}
      </div>

      {/* Edit Person Form */}
      {editingPerson && (
        <div
          style={{
            marginBottom: "2rem",
            padding: "1rem",
            border: "1px solid #007bff",
            borderRadius: "8px",
            backgroundColor: "#f0f8ff",
          }}
        >
          <h3>Edit Person</h3>
          <form
            onSubmit={handleUpdatePerson}
            style={{ display: "grid", gap: "1rem", maxWidth: "400px" }}
          >
            <input
              type="text"
              value={editingPerson.name}
              onChange={(e) =>
                setEditingPerson({ ...editingPerson, name: e.target.value })
              }
              required
            />
            <input
              type="number"
              value={editingPerson.age}
              onChange={(e) =>
                setEditingPerson({
                  ...editingPerson,
                  age: parseInt(e.target.value) || 0,
                })
              }
              required
            />
            <input
              type="email"
              value={editingPerson.email}
              onChange={(e) =>
                setEditingPerson({ ...editingPerson, email: e.target.value })
              }
              required
            />
            <input
              type="text"
              value={editingPerson.city}
              onChange={(e) =>
                setEditingPerson({ ...editingPerson, city: e.target.value })
              }
              required
            />
            <input
              type="text"
              value={editingPerson.occupation}
              onChange={(e) =>
                setEditingPerson({
                  ...editingPerson,
                  occupation: e.target.value,
                })
              }
              required
            />
            <div style={{ display: "flex", gap: "1rem" }}>
              <button
                type="submit"
                disabled={updatePersonMutation.isPending}
                style={{
                  padding: "0.5rem",
                  backgroundColor: "#28a745",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                {updatePersonMutation.isPending
                  ? "Updating..."
                  : "Update Person"}
              </button>
              <button
                type="button"
                onClick={() => setEditingPerson(null)}
                style={{
                  padding: "0.5rem",
                  backgroundColor: "#6c757d",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                Cancel
              </button>
            </div>
          </form>
          {updatePersonMutation.error && (
            <p style={{ color: "red", marginTop: "0.5rem" }}>
              Error:{" "}
              {updatePersonMutation.error.message || "Failed to update person"}
            </p>
          )}
        </div>
      )}

      {/* People List */}
      <div style={{ marginTop: "2rem" }}>
        <h3>People List (from Generated API Client)</h3>
        <div
          style={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
          }}
        >
          {people?.map((person) => (
            <div
              key={person.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "1rem",
                backgroundColor: "#f9f9f9",
              }}
            >
              <h4>{person.name}</h4>
              <p>
                <strong>Age:</strong> {person.age}
              </p>
              <p>
                <strong>Email:</strong> {person.email}
              </p>
              <p>
                <strong>City:</strong> {person.city}
              </p>
              <p>
                <strong>Occupation:</strong> {person.occupation}
              </p>

              <div
                style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}
              >
                <button
                  onClick={() => setEditingPerson(person)}
                  style={{
                    padding: "0.25rem 0.5rem",
                    backgroundColor: "#ffc107",
                    color: "black",
                    border: "none",
                    borderRadius: "4px",
                    fontSize: "0.875rem",
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeletePerson(person.id)}
                  disabled={deletePersonMutation.isPending}
                  style={{
                    padding: "0.25rem 0.5rem",
                    backgroundColor: "#dc3545",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    fontSize: "0.875rem",
                  }}
                >
                  {deletePersonMutation.isPending ? "Deleting..." : "Delete"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Note about API endpoints */}
      <div
        style={{
          marginTop: "2rem",
          padding: "1rem",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
        }}
      >
        <h4>Note:</h4>
        <p>
          This component demonstrates the complete CRUD functionality using the
          generated API client. Currently, only the GET /api/people endpoint is
          implemented in the backend. To enable full functionality, you would
          need to implement:
        </p>
        <ul>
          <li>POST /api/people (Create)</li>
          <li>PUT /api/people/:id (Update)</li>
          <li>DELETE /api/people/:id (Delete)</li>
        </ul>
        <p>
          The hooks are ready to use these endpoints once they're implemented in
          the backend.
        </p>
      </div>
    </div>
  );
};

export default PeopleManager;
