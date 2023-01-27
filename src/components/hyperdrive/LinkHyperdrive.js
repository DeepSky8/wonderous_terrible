import React from "react";
import { Link, useLocation } from "react-router-dom";
import strung from "../../functions/strung";

const LinkHyperdrive = () => {
    let location = useLocation()
    const tempLoc = location.pathname.split('/')
    const timeline = strung(tempLoc, '[')
    console.log('timeline', timeline)

    return (
        <div>
            <div className="nextBar-container">
                <Link className="italic" to={'/hyperdrive/' + timeline} >(hyperdrive)</Link>
            </div>
        </div>
    )
}

export default LinkHyperdrive