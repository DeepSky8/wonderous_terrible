import React from "react";
import { Link, useParams } from "react-router-dom";
import strung from "../../functions/strung";
import {
    hyperdriveBody,
    hyperdriveHeader,
    hyperdriveInstructions,
    hyperdriveRollThrow,
    hyperdriveTitle
} from "../../objects/hyperdriveObjects";
import NextBar from "../navBar/NextBar";

const HyperdriveSelector = () => {
    const { change, timeline } = useParams()
    const backLink = strung(timeline.split('['), '/')
    const hyperArray = Object.entries(hyperdriveRollThrow)

    return (
        <div className="hyperdriveDisplay-container">

            <div className="header-container">
                <Link
                    className="backLink"
                    to={'/hyperdrive/' + timeline}
                >←</Link>
                <h3>{hyperdriveHeader[change]}</h3>
            </div>

            <p className="bodyText">{hyperdriveBody[change]}</p>

            <div className="button-container">
                {hyperArray.map(([key, value]) => {
                    return (
                        <Link
                            key={key}
                            to={'/hyperdrive/' + change + '/' + key + '/' + timeline}
                        >{value}</Link>
                    )
                })}
            </div>


            <NextBar
                styling="italic"
                goTo={backLink}
                linkText='(return to realSpace)'
            />

        </div>
    )
}

export default HyperdriveSelector

// {hyperArray.map(([key, value]) => {
//     return (
//         <Link
//             key={key}
//             to={'/hyperdrive/' + key + '/' + timeline}
//         >{value}</Link>
//     )
// })}