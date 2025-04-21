import React, { Suspense } from 'react';
import {
    createBrowserRouter,
} from "react-router";
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import Blog from '../Pages/Blogs/Blog';

export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path: "/",
          loader: () => fetch('/lawyer.json'),
          // Component: Home,
          element: <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}><Home></Home></Suspense>
        },
        {
          path: "/blogs",
          loader: () => fetch('/Blog.json'),
          Component: Blog,
        }
      ]
    },
  ]);