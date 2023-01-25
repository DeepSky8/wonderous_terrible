import React from "react";
import { encounterAction } from "../../../objects/encounterObjects";
import NextBar from "../../navBar/NextBar";
import EncounterInstructions from "./EncounterInstructions";

const EncounterLocation = () => {
    return (
        <div>
            <EncounterInstructions />
            <NextBar
                goTo={encounterAction.mark.rootURL}
                linkText={encounterAction.mark.title}
            />
        </div>
    )
}

export default EncounterLocation