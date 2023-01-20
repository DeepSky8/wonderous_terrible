import React from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../components/Home";
import Introduction from "../components/introduction/Introduction";
import NewSpecies from "../components/newSpecies/NewSpecies";
import ExploreSpace from "../components/exploreSpace/ExploreSpace";
import FullAttribution from "../components/introduction/FullAttribution";
import NotFoundPage from "../components/NotFoundPage";
import PickDirection from "../components/exploreSpace/PickDirection";
import DiscoverLocation from "../components/exploreSpace/discover/DiscoverLocation";
import EncounterLocation from "../components/exploreSpace/encounter/EncounterLocation";
import SpeciesDisplay from "../components/newSpecies/SpeciesDisplay";
import DiscoverInstructions from "../components/exploreSpace/discover/DiscoverInstructions";
import EncounterInstructions from "../components/exploreSpace/encounter/EncounterInstructions";

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
                path: "/newSpecies",
                element: <NewSpecies />,
                children: [
                    {
                        path: ':step',
                        element: <SpeciesDisplay />

                    }
                ]
            },
            {
                path: "/explore/*",
                element: <ExploreSpace />,
                children: [
                    {
                        index: true,
                        element: <PickDirection />
                    },
                    {
                        path: "discover",
                        element: <DiscoverLocation />,
                        children: [
                            {
                                path: ':location',
                                element: <DiscoverInstructions />
                            }
                        ]
                    },
                    {
                        path: "encounter",
                        element: <EncounterLocation />,
                        children: [
                            {
                                path: ':location',
                                element: <EncounterInstructions />
                            }
                        ]

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
