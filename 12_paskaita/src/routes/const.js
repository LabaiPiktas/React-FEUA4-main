import Main from "../pages/Main/Main";
import Contacts from "../pages/Contacts/Contacts";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import LoginLayout from "../layouts/LoginLayout";
import AuthenticatedLayout from "../layouts/AuthenticatedLayout";
import Users from "../pages/Users/Users";
import SingleUser from "../pages/User/SingleUser";
import Footer from "../components/Footer/Footer";

export const REGISTER_ROUTE = "/register";
export const LOGIN_ROUTE = "/";
export const MAIN_ROUTE = "/";
export const CONTACTS_ROUTE = "/contacts";
export const USERS_ROUTE = "/users";
export const SINGLEUSER_ROUTE = "/singleuser/:id";
export const FOOTER_ROUTE = "/footer";

// kol neesu prisijnugęs
export const loginRoutes = {
  Layout: LoginLayout,
  routes: [
    {
      path: LOGIN_ROUTE,
      component: Login,
    },
    {
      path: REGISTER_ROUTE,
      component: Register,
    },
  ],
};

// kai esu prisijungęs
export const authenticatedRoutes = {
  Layout: AuthenticatedLayout,
  routes: [
    {
      path: MAIN_ROUTE,
      component: Main,
    },
    {
      path: CONTACTS_ROUTE,
      component: Contacts,
    },
    {
      path: USERS_ROUTE,
      component: Users,
    },
    {
      path: SINGLEUSER_ROUTE,
      component: SingleUser,
    },
    {
      path: FOOTER_ROUTE,
      component: Footer,
    },
  ],
};
