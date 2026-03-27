import React from 'react';
import ReactDOM from 'react-dom/client';
import './Assets/scss/normalize.scss';
import './Assets/scss/style.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLInputElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);