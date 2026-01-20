import { AboutDetails } from "~/components";
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [{ title: "About" }];
}

export default function About() {
  return (
    <div className="container mx-auto px-8 py-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">About Page</h1>
      <AboutDetails />
    </div>
  );
}
