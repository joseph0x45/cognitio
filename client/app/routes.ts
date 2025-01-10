import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("test", "routes/test.tsx"),
  route("bruh", "routes/bruh.tsx"),
  //just a sample
  route("admin/login", "pages/adminLogin.tsx")
] satisfies RouteConfig;
