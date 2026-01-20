import type { Route } from "./+types/home";
import React from "react";
import { PeopleList } from "../components";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Home" }];
}

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <PeopleList />
    </div>
  );
}
