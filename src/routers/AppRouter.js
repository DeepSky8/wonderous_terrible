import React from "react";
import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Introduction from "../components/introduction/Introduction";
import NewSpecies from "../components/newSpecies/NewSpecies";
import ExploreSpace from "../components/exploreSpace/ExploreSpace";
import FullAttribution from "../components/introduction/FullAttribution";
import SpeciesDisplay from "../components/newSpecies/SpeciesDisplay";
import NotFoundPage from "../components/NotFoundPage";
import PickDirection from "../components/exploreSpace/PickDirection";

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
        errorElement: <NotFoundPage />,
        children: [
            {
                index: true,
                element: <Introduction />,
            },
            {
                path: "/newSpecies/*",
                element: <NewSpecies />,

            },
            {
                path: "/explore/*",
                element: <ExploreSpace />,
                children: [
                    {
                        index: true,
                        element: <PickDirection />
                    },


                ]
            },
            {
                path: "/fullAttribution",
                element: <FullAttribution />
            }
        ]
    }
])

export default AppRouter

// children:[
//     {
//         index: true,
//         element: <SpeciesDisplay />
//     }
// ]