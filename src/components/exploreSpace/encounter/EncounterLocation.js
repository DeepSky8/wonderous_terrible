import React from "react";
import { encounterAction, nextStep } from "../../../objects/encounterObjects";
import NextBar from "../../navBar/NextBar";
import EncounterInstructions from "./EncounterInstructions";

const EncounterLocation = () => {
    return (
        <div>
            <EncounterInstructions />
            <NextBar
                goTo={encounterAction.mark.rootURL}
                linkText={nextStep + encounterAction.mark.title}
            />
        </div>
    )
}

export default EncounterLocation