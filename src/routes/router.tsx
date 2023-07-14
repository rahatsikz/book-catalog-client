import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AllBooks from "../pages/AllBooks";
import AddNewBook from "../pages/AddNewBook";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/allbooks",
        element: <AllBooks />,
      },
      {
        path: "/addnew",
        element: (
          <PrivateRoute>
            <AddNewBook />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
