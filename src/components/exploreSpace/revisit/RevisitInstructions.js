import React from "react";
import { useParams } from "react-router-dom";
import { returnAction } from "../../../objects/encounterObjects";

const RevisitInstructions = () => {
    const { location } = useParams();
    const prompt = returnAction[location]

    return (
        <div className="discoverInstructions-container">
            <h3>{returnAction.header + returnAction.descriptor[location]}</h3>
            <p>
                {
                    returnAction.promptGM1.length > 0
                    &&
                    returnAction.promptGM1
                }
            </p>
            <p>{returnAction.promptPlayers}</p>

            {prompt.map((option) => {
                return (
                    <p
                        className="italic"
                        key={option}
                    >- {option} -</p>
                )
            })}
            <p>{returnAction.promptGM2}</p>
            <p>{returnAction.finalStep}</p>
        </div>
    )
}

export default RevisitInstructions