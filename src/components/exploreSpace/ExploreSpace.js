import React from "react";
import { Outlet } from "react-router-dom";
import LinkHyperdrive from "../hyperdrive/LinkHyperdrive";


const ExploreSpace = () => {

    return (
        <div>
            <Outlet />
            <LinkHyperdrive />

        </div>
    )
}

export default ExploreSpace

// <div className="nextBar-container">
// <Link className="italic" to='/hyperdrive' >(hyperdrive)</Link>
// </div>