import type { Person } from "generated/api-client";

export const Card = ({ person }: { person: Person }) => {
  return (
    <div
      key={person.age}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-200"
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
