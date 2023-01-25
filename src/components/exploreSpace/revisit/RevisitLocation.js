import React from "react";
import { returnAction } from "../../../objects/encounterObjects";
import NextBar from "../../navBar/NextBar";
import RevisitInstructions from "./RevisitInstructions";

const RevisitLocation = () => {
    return (
        <div>
            <RevisitInstructions />
            <NextBar
                goTo={returnAction.mark.rootURL}
                linkText={returnAction.mark.title}
            />
        </div>
    )
}

export default RevisitLocation