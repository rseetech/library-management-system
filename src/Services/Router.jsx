import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../Layouts";

const HomePage = lazy(() => import("../Pages/HomePage"));
const ContactUs = lazy(() => import("../Pages/ContactUs"));

const routeMaps = [
  {
    path: "/",
    page: HomePage
  },
  {
    path: "/contactus",
    page: ContactUs
  },
  /* {
    path: "/posts",
    page: Posts
  },
  {
    path: "/aboutus",
    page: AboutUs
  }, */
];

const Router = () => {

  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          {routeMaps.map((route, index) => (
            <Route
              exact
              path={route.path}
              element={
                <DefaultLayout>
                  {" "}
                  <route.page />{" "}
                </DefaultLayout>
              }
              key={index}
            />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
