import React from "react";
import { Link } from "react-router-dom";
import { returnAction, revisitOptions } from "../../../objects/encounterObjects";

const RevisitSelector = () => {
    const revisitArray = Object.entries(revisitOptions)

    return (
        <div className="revisitSelector-container">
            <h3>{returnAction.selectorInstruction}</h3>
            {revisitArray.map(([key, value]) => {
                return (
                    <Link
                        key={key}
                        to={key}
                    >{value}</Link>
                )

            })}
        </div>
    )
}

export default RevisitSelector