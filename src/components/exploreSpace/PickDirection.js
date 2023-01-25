import React, { useState } from "react";
import {
    clickToTravel,
    directionOptions,
    selectDestination
} from '../../objects/encounterObjects'
import NextBar from "../navBar/NextBar";

const PickDirection = () => {
    const directionArray = Object.entries(directionOptions)
    const [direction, setDirection] = useState('')
    const [value, setValue] = useState('')

    const click = (key) => {
        setDirection(key)
        setValue(directionOptions[key])
    }

    return (
        <div className="pickDirection-container">
            <h2>Where will you go next?</h2>
            <div className="pickDirection-buttons">
                {directionArray.map(([key, value]) => {
                    return (
                        <button
                            key={key}
                            onClick={() => { click(key) }}
                        >{value.title}</button>
                    )
                })}
            </div>
            <p className="directionValue">{value.description}</p>
            <NextBar
                goTo={value.rootURL + direction}
                linkText={
                    direction.length > 0
                        ?
                        clickToTravel
                        :
                        selectDestination
                }
                active={direction.length > 0}
            />
        </div>
    )
}

export default PickDirection

// next={
//     {
//         rootURL: value.rootURL,
//         target: value.target,
//         title:
//             direction.length > 0
//                 ?
//                 clickToTravel
//                 :
//                 selectDestination
//         ,
//         active: direction.length > 0
//     }
// }