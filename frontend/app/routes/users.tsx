import { AddPersonForm } from "~/components";
import type { Route } from "./+types/users";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Users" }];
}

export default function Users() {
  return (
    <div className="container mx-auto px-8 py-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Users Page</h1>
      <AddPersonForm />
    </div>
  );
}
