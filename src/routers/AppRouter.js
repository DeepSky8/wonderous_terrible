import React from "react";
import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Introduction from "../components/introduction/Introduction";
import NewSpecies from "../components/newSpecies/NewSpecies";
import ExploreSpace from "../components/exploreSpace/ExploreSpace";

// const AppRouter = () => {
//     return (
//         <BrowserRouter>
//             <div>
//                 <Routes>
//                     <Route index path="/" element={<Home />} />
//                     <Route path="/newGame" />
//                     <Route path="/activeGame" />

//                 </Routes>


//             </div>


//         </BrowserRouter>
//     )
// }

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                index: true,
                element: <Introduction />,
            },
            {
                path: "/newSpecies",
                element: <NewSpecies />,
            },
            {
                path: "/explore/*",
                element: <ExploreSpace />,
            },
        ]
    }
])

export default AppRouter