import React from "react";
import AppRouter from './routers/AppRouter';
import { RouterProvider } from 'react-router-dom';

const jsx = (
    <RouterProvider router={AppRouter} />
)


function App() {
  return (
    jsx
  )
}

export default App;
