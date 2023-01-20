import React from "react";
import { useParams } from "react-router-dom";
import { discoverAction } from "../../../objects/encounterObjects";

const DiscoverInstructions = () => {
const { location } = useParams()

    return (
        <div className="discoverInstructions-container">
            <h3>{discoverAction.header + discoverAction.descriptor[location]}</h3>
            <p>
                <span>{discoverAction.start}</span>
                <span className="bold-underline">{discoverAction.direction[location]}</span>
                <span>{discoverAction.end}</span>
            </p>

            <p>{discoverAction.finalStep}</p>
        </div>
    )
}

export default DiscoverInstructions