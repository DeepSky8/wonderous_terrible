import React from "react";
import AppRouter from './routers/AppRouter';
import { RouterProvider } from 'react-router-dom';

const jsx = (
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
  </React.StrictMode>
)


function App() {
  return (
    jsx
  )
}

export default App;
