import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("/", "./routes/home.tsx"),
  route("/users", "./routes/users.tsx"),
  route("/about", "./routes/about.tsx"),
] satisfies RouteConfig;
