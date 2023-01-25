import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { discoverAction } from "../../../objects/encounterObjects";
import NextBar from "../../navBar/NextBar";
import DiscoverInstructions from "./DiscoverInstructions";

const DiscoverLocations = () => {
    const { location } = useParams();
    return (
        <div>
            <DiscoverInstructions />
            <NextBar
                goTo={discoverAction.encounter.rootURL + location}
                linkText={discoverAction.encounter.title}
            />
        </div>
    )
}

export default DiscoverLocations