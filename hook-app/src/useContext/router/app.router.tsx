import { createBrowserRouter } from "react-router";

import { ProfessionalAppLayout } from "../layout/ProfessionalAppLayout";
import { AboutPage } from "../pages/about/AboutPage";
import { HomePage } from "../pages/home/HomePage";
import { LoginPage } from "../pages/login/LoginPage";
import { ProfilePage } from "../pages/profile/ProfilePage";
import { PrivateRoute } from "./PrivateRoute";

export const routerProfessionalApp = createBrowserRouter([
  {
    Component: ProfessionalAppLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "profile", element: <PrivateRoute element={<ProfilePage />} /> },
      { path: "login", Component: LoginPage },
    ],
  },
]);
