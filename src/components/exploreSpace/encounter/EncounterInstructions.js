import React from "react";
import { useParams } from "react-router-dom";
import { encounterAction } from "../../../objects/encounterObjects";

const EncounterInstructions = () => {
    const { location } = useParams();
    const prompt = encounterAction[location]

    return (
        <div className="discoverInstructions-container">
            <h3>{encounterAction.header + encounterAction.descriptor[location]}</h3>
            <p>
            {
                encounterAction.promptGM1.length > 0
                &&
                encounterAction.promptGM1
            }
            </p>
            <p>{encounterAction.promptPlayers}</p>

            {prompt.map((option) => {
                return (
                    <p
                        className="italic"
                        key={option}
                    >- {option} -</p>
                )
            })}
            <p>{encounterAction.promptGM2}</p>
            <p>{encounterAction.finalStep}</p>
        </div>
    )
}

export default EncounterInstructions