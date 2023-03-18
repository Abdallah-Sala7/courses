import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

import "./main.css";

import { Login, Register, WithGaurd } from "./components";
import {
  Home,
  RootLayout,
  Details,
  AuthPage,
  ContactUs,
  Courses,
  Profile,
  ProfileCourses,
  Quizzes,
  Settings,
  Cart,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <WithGaurd>
        <RootLayout />
      </WithGaurd>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "contact", element: <ContactUs /> },
      {
        path: "profile",
        element: <Profile />,
        children: [
          { index: true, element: <ProfileCourses /> },
          { path: "quizzes", element: <Quizzes /> },
          { path: "settings", element: <Settings /> },
        ],
      },
      { path: "courses", element: <Courses /> },
      { path: "details/:id", element: <Details /> },
      { path: "courses/:category", element: <Courses /> },
      { path: "cart", element: <Cart /> },
    ],
  },
  {
    path: "auth",
    element: <AuthPage />,
    children: [
      { index: true, element: <Login /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
