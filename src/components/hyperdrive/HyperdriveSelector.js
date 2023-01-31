import React from "react";
import { Link, useParams } from "react-router-dom";
import strung from "../../functions/strung";
import {
    hyperdriveBody,
    hyperdriveHeader,
    hyperdriveRollThrow,
} from "../../objects/hyperdriveObjects";
import NextBar from "../navBar/NextBar";

const HyperdriveSelector = () => {
    const { change, timeline } = useParams()
    const backLink = strung(timeline.split('['), '/')
    const hyperArray = Object.entries(hyperdriveRollThrow)

    return (
        <div className="hyperdriveDisplay-container">


            <div className="header-container">
                <div className="leftBlock">
                    <div className="leftTop"></div>
                    <div className='backLink'><Link to={'/hyperdrive/' + timeline}>←</Link></div>
                    <div className="leftBottom"></div>
                </div>
                <div className="centerBlock">
                    <h3>{hyperdriveHeader[change]}</h3>

                </div>
                <div className="rightBlock">

                </div>
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