import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
// import './styles/index.css';
import './styles/styles.scss';
import App from './App';
import AppRouter from './routers/AppRouter';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Introduction from './components/introduction/Introduction';
import NewSpecies from './components/newSpecies/NewSpecies';
import ExploreSpace from './components/exploreSpace/ExploreSpace';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     children: [
//       {
//         index: true,
//         element: <Introduction />,
//       },
//       {
//         path: "/newSpecies",
//         element: <NewSpecies />,
//       },
//       {
//         path: "/explore/*",
//         element: <ExploreSpace />,
//       },
//     ]
//   }
// ])

// const jsx = (
//   <React.StrictMode>
//     <RouterProvider router={AppRouter} />
//   </React.StrictMode>
// )

const container = document.getElementById('root');
const appRoot = createRoot(container);
appRoot.render(<App tab="home" />)
// ReactDOM.render(jsx, document.getElementById('root'));

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//<App tab="home" />