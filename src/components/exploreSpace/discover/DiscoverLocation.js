import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { discoverAction } from "../../../objects/encounterObjects";
import NextBar from "../../navBar/NextBar";

const DiscoverLocations = () => {
    const { location } = useParams();
    return (
        <div>
            <Outlet />
            {location}
            <NextBar
                next={
                    {
                        rootURL: discoverAction.encounter.rootURL,
                        title: discoverAction.encounter.title,
                        target: location,
                        active: false,
                    }
                }

            />
        </div>
    )
}

export default DiscoverLocations