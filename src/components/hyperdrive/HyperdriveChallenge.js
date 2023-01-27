import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import randomDigit from "../../functions/randomDigit";
import strung from "../../functions/strung";
import {
    hyperdriveDistance,
    hyperdriveHeader,
    hyperdriveInstructions,
    hyperdriveProcess,
    hyperdriveRoll,
    hyperdriveRollThrow,
    hyperdriveTable,
    hyperdriveTitle
} from "../../objects/hyperdriveObjects";
import NextBar from "../navBar/NextBar";

const Hyperdrive = () => {
    const { change, challenge, timeline } = useParams()
    const backLink = strung(timeline.split('['), '/')
    const [rollNumber, setRollNumber] = useState(0)
    const [rollResult, setRollResult] = useState('')
    // const hyperArray = Object.entries(hyperdriveHeader)

    const hyperDie = () => {
        if (rollResult.length === 0) {
            const roll = randomDigit(7, 1)
            setRollNumber(roll)

            setRollResult(
                hyperdriveTable[change].includes(roll)
                    ?
                    'SUCCESS'
                    :
                    'FAILURE'

            )
        }

    }

    return (
        <div className="hyperdriveDisplay-container">
            <div className="header-container">
                <Link
                    className="backLink"
                    to={'/hyperdrive/' + change + '/' + timeline}
                >←</Link>
                <h3>{hyperdriveRollThrow[challenge]}</h3>
            </div>

            {
                challenge === 'bowlThrow' &&
                <div className="bodyText">
                    <p>{hyperdriveDistance[change]}</p>
                    <p>{hyperdriveProcess.test}</p>
                    <p>{hyperdriveProcess.success}</p>
                    <p>{hyperdriveProcess.failure}</p>
                </div>
            }

            {
                challenge === 'rollApp' &&
                <div className="bodyText">
                    <div className="roll-container">
                        <span className="rollButton">
                            <button
                                onClick={() => { hyperDie() }}
                            >Roll the Hyper-Die</button>
                        </span>
                        <span className="rollResult-container">
                            <p className="rollResult" >{rollNumber}</p>
                        </span>

                    </div>

                    {
                        rollResult.length > 0 &&
                        <p className="center">
                            {rollResult}
                        </p>
                    }

                    <p className="center">{hyperdriveRoll[change]}</p>
                </div>

            }

            <NextBar
                styling='italic'
                goTo={backLink}
                linkText='(Return to realSpace)'
            />


        </div>
    )
}

export default Hyperdrive
