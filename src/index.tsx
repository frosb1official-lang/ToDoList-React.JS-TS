import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToDoList } from './pages/ToDoList';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLInputElement
);
root.render(
  <React.StrictMode>
    <ToDoList />
  </React.StrictMode>
);