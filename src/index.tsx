import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToDoListPage } from './pages/ToDoListPage';
import './Assets/scss/normalize.scss';
import './Assets/scss/style.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLInputElement
);
root.render(
  <React.StrictMode>
    <ToDoListPage />
  </React.StrictMode>
);