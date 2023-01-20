import React from "react";
import { useParams } from "react-router-dom";

const EncounterInstructions = () => {
    const { location } = useParams();

    return (
        <div>
            Encounter Instructions: {location}
        </div>
    )
}

export default EncounterInstructions