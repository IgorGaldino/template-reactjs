import Dashboard from "./views/Dashboard";
import Profile from "./views/Profile";
import About from "./views/About";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/profile",
    name: "Perfil",
    component: Profile,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

export default routes;
