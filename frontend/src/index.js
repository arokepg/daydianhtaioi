import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


import Main from './Main.js';
import AboutUs from './pages/AboutUs/AboutUs'
import Rewatch from './pages/Rewatch/Rewatch'

import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: "AboutUs",
    element: <AboutUs/>,
  },
  {
    path: "Rewatch",
    element: <Rewatch/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
