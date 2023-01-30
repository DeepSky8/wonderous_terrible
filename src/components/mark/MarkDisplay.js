import React from "react";
import { Link, useParams } from "react-router-dom";
import { leaveMarkBody, leaveMarkFooter, leaveMarkHeader } from "../../objects/markObjects";
import NextBar from "../navBar/NextBar";


const MarkDisplay = () => {
    let { markType } = useParams();

    return (
        <div className="markDisplay-container">
            <div className="header-container">
                <div className="leftBlock">
                    <div className="leftTop"></div>
                    <div className='backLink'><Link to='/mark'>←</Link></div>
                    <div className="leftBottom"></div>
                </div>
                <div className="centerBlock">
                    <h3>{leaveMarkHeader[markType]}</h3>

                </div>
                <div className="rightBlock">

                </div>
            </div>

            <p className="bodyText">{leaveMarkBody[markType]}</p>
            <p className="bodyTest">{leaveMarkFooter[markType]}</p>
            <NextBar
                goTo='/explore'
                linkText='Select a new destination'
            />
        </div>
    )
}

export default MarkDisplay;

