import React from "react";
import { Link } from "react-router";
import { useAddPeople } from "~/hooks/useAddPeople";

export const AddPersonForm = () => {
  const addPeopleMutation = useAddPeople();

  const submitForm = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    addPeopleMutation.mutate(
      {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        age: parseInt(formData.get("age") as string, 10),
        city: formData.get("city") as string,
        occupation: formData.get("occupation") as string,
      },
      {
        onSuccess: () => {
          form.reset();
        },
      }
    );
  };

  return (
    <form
      className="mx-auto bg-white p-6 rounded-lg shadow-md space-y-4"
      onSubmit={submitForm}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Add New Person</h2>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter full name"
          required
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter email address"
          required
        />
      </div>

      <div>
        <label
          htmlFor="age"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Age
        </label>
        <input
          type="number"
          id="age"
          name="age"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter age"
          required
        />
      </div>

      <div>
        <label
          htmlFor="city"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          City
        </label>
        <input
          type="text"
          id="city"
          name="city"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter city"
          required
        />
      </div>

      <div>
        <label
          htmlFor="occupation"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Occupation
        </label>
        <input
          type="text"
          id="occupation"
          name="occupation"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter occupation"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      >
        Add Person
      </button>
      <Link
        to="/"
        className="block w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors text-algin-center text-center"
      >
        Back to users
      </Link>
    </form>
  );
};
