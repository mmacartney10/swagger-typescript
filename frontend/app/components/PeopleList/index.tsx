import type { Person } from "generated/api-client";
import React from "react";
import { useGetPeople } from "~/hooks/useGetPeople";

const Card = ({ person }: { person: Person }) => {
  return (
    <div
      key={person.id}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
    >
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-gray-900">{person.name}</h3>
        <div className="space-y-2 text-gray-600">
          <p className="flex items-center">
            <span className="font-medium text-gray-900 w-20">Email:</span>
            <span>{person.email}</span>
          </p>
          <p className="flex items-center">
            <span className="font-medium text-gray-900 w-20">Age:</span>
            <span>{person.age}</span>
          </p>
          <p className="flex items-center">
            <span className="font-medium text-gray-900 w-20">City:</span>
            <span>{person.city}</span>
          </p>
          <p className="flex items-center">
            <span className="font-medium text-gray-900 w-20">Job:</span>
            <span>{person.occupation}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export const PeopleList = () => {
  const { data, error, isLoading } = useGetPeople();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading people: {error.message}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">People List</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map(person => (
          <Card key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
};
