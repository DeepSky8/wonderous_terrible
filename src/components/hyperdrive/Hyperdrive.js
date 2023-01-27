import React from "react";
import { Link, useParams } from "react-router-dom";
import strung from "../../functions/strung";
import { hyperdriveHeader, hyperdriveInstructions, hyperdriveTitle } from "../../objects/hyperdriveObjects";

const Hyperdrive = () => {
    const { timeline } = useParams()
    const backLink = strung(timeline.split('['), '/')
    const hyperArray = Object.entries(hyperdriveHeader)

    return (
        <div className="hyperdriveDisplay-container">
            <div className="header-container">
                <Link
                    className="backLink"
                    to={backLink}
                >←</Link>
                <h3>{hyperdriveTitle}</h3>
            </div>

            <p className="bodyText">{hyperdriveInstructions}</p>

            <div className="button-container">
                {hyperArray.map(([key, value]) => {
                    return (
                        <Link
                            key={key}
                            to={'/hyperdrive/' + key + '/' + timeline}
                        >{value}</Link>
                    )
                })}
            </div>

        </div>
    )
}

export default Hyperdrive