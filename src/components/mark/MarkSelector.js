import React from "react";
import { Link } from "react-router-dom";

import { leaveMarkHeader } from "../../objects/markObjects";
import MarkIntroduction from "./MarkIntroduction";


const MarkSelector = () => {
    const headerArray = Object.entries(leaveMarkHeader)
    return (
        <div className="markSelector-container">
        <MarkIntroduction />
            {
                headerArray.map(([key, value]) => {
                    return (
                        <Link
                        key={key}
                        to={`${key}`}

                    >{value}</Link>

                    )
                })
            }
        </div>
    )
}
export default MarkSelector;

// className="mark-container"