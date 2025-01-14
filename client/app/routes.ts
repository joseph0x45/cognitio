import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("admin/login", "pages/adminLogin.tsx")
] satisfies RouteConfig;
