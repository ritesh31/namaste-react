import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/usercontext";
// import Grocery from "./components/Grocery";

const About = lazy(() => import("./components/About"));
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState(null);

  // authetication
  useEffect(() => {
    const user = { name: "Sachin Tendulkar" };
    setUserName(user?.name);
  }, []);

  return (
    <div className="app">
      <UserContext.Provider value={{ name: userName, setUserName }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </div>
    // </UserContext.Provider>
  );
};

// Creating route paths
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Assigning router to RouterProvider
root.render(<RouterProvider router={appRouter} />);
