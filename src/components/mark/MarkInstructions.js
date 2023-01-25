import React from "react";
import { useParams } from "react-router-dom";
import { leaveMarkBody, leaveMarkFooter } from "../../objects/markObjects";

const MarkInstructions = () => {
    let { markType } = useParams();

    return (
        <div className="discoverInstructions-container">
            <p>{leaveMarkBody[markType]}</p>
            <p>{leaveMarkFooter[markType]}</p>
        </div>
    )
}

export default MarkInstructions