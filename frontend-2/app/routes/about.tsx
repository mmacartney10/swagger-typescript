import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [{ title: "About" }];
}

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
