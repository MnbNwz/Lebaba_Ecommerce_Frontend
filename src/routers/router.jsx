import React from 'react';
import { createBrowserRouter, Route } from 'react-router-dom';
import App from '../App';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/',
        element: <h1>Home Page</h1>
      }
    ]
  },
]);

export default router; 