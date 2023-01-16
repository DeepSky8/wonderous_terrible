import React from "react";
import logo from './logo.svg';
import starBackground from './images/starBackground.jpg';
// import './styles/App.css';
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
// change

//        <img src={starBackground} className='background' alt="star background" />

//         <p>
// Edit <code>src/App.js</code> and save to reload. actually pointed
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>