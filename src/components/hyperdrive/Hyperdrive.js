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
                <div className="leftBlock">
                    <div className="leftTop"></div>
                    <div className='backLink'><Link to={backLink}>←</Link></div>
                    <div className="leftBottom"></div>
                </div>
                <div className="centerBlock">
                    <h3>{hyperdriveTitle}</h3>

                </div>
                <div className="rightBlock">

                </div>
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

// <div className="header-container">

// <div className="backLink-container">
//     <Link
//         className="backLink"
//         to={backLink}
//     >←</Link>
// </div>

// <h3>{hyperdriveTitle}</h3>
// <div className="headerSpacer"></div>
// </div>