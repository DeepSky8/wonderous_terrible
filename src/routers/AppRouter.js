import React from "react";
import { createBrowserRouter } from "react-router-dom";
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
import ExploreUndefined from "../components/exploreSpace/ExploreUndefined";
import MarkDisplay from "../components/mark/MarkDisplay";
import MarkSelector from "../components/mark/MarkSelector";
import RevisitLocation from "../components/exploreSpace/revisit/RevisitLocation";
import RevisitSelector from "../components/exploreSpace/revisit/RevisitSelector";
import Hyperdrive from "../components/hyperdrive/Hyperdrive";
import HyperdriveSelector from "../components/hyperdrive/HyperdriveSelector";
import HyperdriveChallenge from "../components/hyperdrive/HyperdriveChallenge";

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <NotFoundPage />,
        children: [
            {
                index: true,
                errorElement: <ExploreUndefined />,
                element: <Introduction />,
            },
            {
                path: "/newSpecies",
                element: <NewSpecies />,
                errorElement: <ExploreUndefined />,
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
                errorElement: <ExploreUndefined />,
                children: [
                    {
                        index: true,
                        element: <PickDirection />
                    },
                    {
                        path: "discover/:location",
                        element: <DiscoverLocation />,
                    },
                    {
                        path: "encounter/:location",
                        element: <EncounterLocation />,
                    },
                    {
                        path: "revisit/",
                        element: <RevisitSelector />,
                    },
                    {
                        path: "revisit/:location",
                        element: <RevisitLocation />,
                    },
                    {
                        path: "undefined",
                        element: <ExploreUndefined />

                    }
                ]
            },

            {
                path: "mark/",
                element: <MarkSelector />,
                errorElement: <ExploreUndefined />,
            },
            {
                path: "mark/:markType",
                element: <MarkDisplay />,
                errorElement: <ExploreUndefined />,
            },
            {
                path: "hyperdrive/:timeline",
                element: <Hyperdrive />,
                errorElement: <ExploreUndefined />,
            },
            {
                path: "hyperdrive/:change/:timeline",
                element: <HyperdriveSelector />,
                errorElement: <ExploreUndefined />,
            },
            {
                path: "hyperdrive/:change/:challenge/:timeline",
                element: <HyperdriveChallenge />,
                errorElement: <ExploreUndefined />,
            },
            {
                path: "/fullAttribution",
                element: <FullAttribution />,
                errorElement: <ExploreUndefined />,
            }
        ]
    }
])

export default AppRouter
