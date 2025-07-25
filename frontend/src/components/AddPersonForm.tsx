import React, { useState } from "react";
import { usePostPerson } from "../hooks/usePeople";
import { PeopleCreatePayload } from "../api/api-client";
import "./AddPersonForm.css";

export const AddPersonForm: React.FC = () => {
  const [formData, setFormData] = useState<PeopleCreatePayload>({
    name: "",
    email: "",
    age: 0,
    city: "",
    occupation: "",
  });

  const postPersonMutation = usePostPerson();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "age" ? parseInt(value) || 0 : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      formData.age <= 0 ||
      !formData.city.trim() ||
      !formData.occupation.trim()
    ) {
      alert("Please fill in all fields with valid data");
      return;
    }

    postPersonMutation.mutate(formData, {
      onSuccess: (data) => {
        console.log("Person created successfully:", data);
        // Reset form
        setFormData({ name: "", email: "", age: 0, city: "", occupation: "" });
      },
    });
  };

  return (
    <div className="add-person-form">
      <h2>Add New Person</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="Enter person's name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="Enter person's email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
            min="1"
            max="120"
            placeholder="Enter person's age"
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
            placeholder="Enter person's city"
          />
        </div>

        <div className="form-group">
          <label htmlFor="occupation">Occupation:</label>
          <input
            type="text"
            id="occupation"
            name="occupation"
            value={formData.occupation}
            onChange={handleInputChange}
            required
            placeholder="Enter person's occupation"
          />
        </div>

        <button
          type="submit"
          disabled={postPersonMutation.isPending}
          className="submit-button"
        >
          {postPersonMutation.isPending ? "Adding Person..." : "Add Person"}
        </button>

        {postPersonMutation.isError && (
          <div className="error-message">
            Error: {postPersonMutation.error?.message || "Failed to add person"}
          </div>
        )}

        {postPersonMutation.isSuccess && (
          <div className="success-message">Person added successfully!</div>
        )}
      </form>
    </div>
  );
};
