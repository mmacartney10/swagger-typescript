import { PeopleList } from "~/components";
import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Home" }];
}

export default function Home() {
  return (
    <div className="container mx-auto px-8 py-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Home Page</h1>
      <Link
        to="/users"
        className="block bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors mb-6 text-center"
      >
        Add new user
      </Link>
      <PeopleList />
    </div>
  );
}
