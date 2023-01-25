import React from "react";
import { Link, useParams } from "react-router-dom";
import { leaveMarkBody, leaveMarkFooter, leaveMarkHeader } from "../../objects/markObjects";
import NextBar from "../navBar/NextBar";


const MarkDisplay = () => {
    let { markType } = useParams();

    return (
        <div className="markDisplay-container">
            <span className="header-container">
                <Link className='backLink' to='/mark'>←</Link>
                <h3>{leaveMarkHeader[markType]}</h3>
            </span>

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

