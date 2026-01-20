import { useGetPeople } from "~/hooks/useGetPeople";
import { Card } from "../Card";

export const PeopleList = () => {
  const { data, error, isLoading } = useGetPeople();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading people: {error.message}</div>;
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">People List</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((person, index) => (
          <Card key={index} person={person} />
        ))}
      </div>
    </div>
  );
};
