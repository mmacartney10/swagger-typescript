import type { Route } from "./+types/users";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Users" }];
}

export default function Users() {
  return (
    <div>
      <h1>Users Page</h1>
    </div>
  );
}
