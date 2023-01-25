import React, { useEffect, useState } from "react";
import newDestination from "../../functions/newDestination";
import randomDigit from "../../functions/randomDigit";
import {
    clickToTravel,
    directionOptions,
    selectDestination
} from '../../objects/encounterObjects'
import NextBar from "../navBar/NextBar";

const PickDirection = () => {
    const directionArray = Object.entries(directionOptions)
    const [direction, setDirection] = useState('')
    const [value, setValue] = useState({ rootURL: 'discover/' })

    useEffect(() => {
        setDirection(newDestination(randomDigit()))
    }, [])

    const click = (key) => {
        setValue(directionOptions[key])
        if (key === 'discover') {
            setDirection(newDestination(randomDigit()))
        } else {
            setDirection(key)
        }

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
                    value.length > 0
                        ?
                        clickToTravel
                        :
                        selectDestination
                }
                active={value.length > 0}
            />
        </div>
    )
}

export default PickDirection