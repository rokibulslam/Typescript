import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Home from "../pages/Home";



const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "Cart",
        element: <Cart />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

export default routes;